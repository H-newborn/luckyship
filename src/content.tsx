import React, { useEffect, useState} from "react";
import axios from 'axios'
import Upload from "./components/Upload/upload";

const checkFileSize = (file: File) => {
  // if (Math.round(file.size / 1024) > 50) {
  //   alert('file too big')
  //   return false
  // }
  return true
}

const filePromise = (file: File) => {
  const newFile = new File([file], 'new_name.docx', { type: file.type })
  return Promise.resolve(newFile)
}

const Content: React.FC = () => {
  const [title, setTitle] = useState('')
  const postData = {
    title: 'my title',
    body: 'hrllo'
  }
  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        console.log(res);
        setTitle(res.data.title)
      // res.data.
    })
  })
  return <div>
    {title}
    <Upload action="http://jsonplaceholder.typicode.com/posts/"
      onChange={() => {console.log('changed');
      }}
      // beforeUpload={checkFileSize}
      beforeUpload={filePromise}
    ></Upload>
  </div>
}

export default Content
