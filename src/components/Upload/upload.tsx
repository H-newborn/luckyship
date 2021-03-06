import React, { useRef, useState } from "react";
import axios from 'axios'
import Button from "../Button/button";

export type UploadFilesStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
  uid: string
  size: number
  name: string
  status?: UploadFilesStatus
  percent?: number
  raw?: File
  response?: any
  error?: any
}

export interface UploadProps {
  action: string,
  defaultFileList ?: UploadFile[]
  beforeUpload?: (file: File) => boolean | Promise<File>
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
  onChange?: (file: File) => void
  onRemove?: (file: UploadFile) => void
}

export const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange
  } = props
  
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj} 
        } else {
          return file
        }
      })
    })
  }
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }
  
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList([_file, ...fileList])
    const formData = new FormData()
      formData.append(file.name, file)
      axios.post(action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0
          if (percentage < 100) {
            updateFileList(_file, { percent: percentage, status: 'uploading'})
            // setFileList((prevList) => {
              // return prevList
            // })
            if (onProgress) {
              onProgress(percentage, file)
            }
          }
        }
      }).then(resp => {
        console.log(resp);
        updateFileList(_file, { response: resp.data, status: 'success'})
        if (onSuccess) {
          onSuccess(resp.data, file)
        }
        if (onChange) {
          console.log('success');
          onChange(file)
        }
      }).catch(err => {
        console.error(err);
        updateFileList(_file, { error: err, status: 'error'})
        if (onError) {
          onError(err, file)
        }
        if (onChange) {
          console.log('error');
          onChange(file)
        }
      })
  }
  
  return (<div
    className="lucky-upload-component"
  >
    <Button btnType="primary" onClick={handleClick}>Upload File</Button>
    <input
      ref={fileInput}
      className="lucky-file-input"
      style={{ display: 'none' }}
      onChange={handleFileChange}
      type='file'
    ></input>
  </div>)



}

export default Upload
