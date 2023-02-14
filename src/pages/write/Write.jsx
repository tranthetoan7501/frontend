
import React, { useState } from "react";
import { uploadImg,createPost } from '../../api'
import "./write.css";
import {Button,Center,Text,Stack,Input, Textarea } from '@chakra-ui/react'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from "react-router-dom";

export default function Write() {
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const { notify } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick =async ()=>{
    try{
      if(!title){
        notify("Chưa có viết tựa kìa !!!");
        return;
      }
      if(description.length<=200){
        notify("Viết ngắn ngủn ai cho đăng !!!");
        return;
      }
      if(!file){
        notify("Có cái ảnh cũng thiếu !!!");
        return;
      }
      setIsLoading(true);
        let {data} = await uploadImg(file);
        const image = data.data;
        let res = await createPost({image,title,description});
        notify('Đăng lên rồi nha!!!');
        setDescription("");
        setTitle("");
        navigate(`/post/${res.data.data._id}`)

    }catch(err){
      console.log(err);
      notify(err.response.data.error);
    }
  }
  const titleOnchange = (e)=>{
    setTitle(e.target.value);
  } 
  const descriptionOnchange = (e)=>{
    setDescription(e.target.value);
  } 

  return (
    <div className="write">
      <Center h='100px' color='white'>
        <Text as='b' color='teal' fontSize='5xl'>Write your content</Text>
      </Center>
      <Stack spacing={3}>
        <Text color='teal' fontSize='3xl'>Titie</Text>
        <Input
          value={title}
          color='teal'
          placeholder='Please input title'
          _placeholder={{ color: 'inherit' }}
          onChange={titleOnchange}
        />
        <Text color='teal' fontSize='3xl'>Content</Text>
        <Textarea
          value={description}
          placeholder='Write your post content. More than 200 letter!!!'
          size='sm'
          onChange={descriptionOnchange}
        />
        <Text color='teal' fontSize='3xl'>Image</Text>
        <Input focusBorderColor='teal' color='teal' type="file" onChange={(e) => setFile(e.target.files[0])}/>
        <Center h='150px' color='white'>
          {isLoading?<Button isLoading colorScheme='teal' size='lg' onClick={handleClick}> Submit</Button>:<Button colorScheme='teal' size='lg' onClick={handleClick}> Submit</Button>}
          
        </Center>
    </Stack>
    </div>
    
    
  );
}
