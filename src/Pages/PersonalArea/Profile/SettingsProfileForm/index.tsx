import { TextField, Button, Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { PersonalAreaFormSchema } from "../../../../utils/validations";
import FormField from "../../../../Components/UI/FormField";
import avatar from '../assets/profile.png'

type Props = {};

type UploadAvatarProps = {
  selectedFile: any
}

// export default interface IFile {
//   url: string,
//   name: string,
// }

function SettingsProfileForm({ }: Props) {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(PersonalAreaFormSchema)
  });
  const onSubmit = () => {
    // data => console.log(data)
  };

  console.log(form)

  // const filePicker = useRef(null)
  // const [selectedFile, setSelectedFile] = useState(null)
  // const [upload, setUpload] = useState();

  // const UploadAvatar = ({selectedFile}: UploadAvatarProps) => {

  //   const handleChange = ({event}:any) => {
  //     console.log(event.target.files);
  //     setSelectedFile(event.target.files[0])
  //   }

  //   const handleUpload = async () => {
  //     if(!selectedFile) {
  //       alert("Please select photo")
  //       return;
  //     }
  //   }

  //   const formData = new FormData();
  //   formData.append('file', selectedFile)

  //   const res = await fetch(hosturl, {
  //     method: 'POST',
  //     body: 'formData'
  //   })

  //   const data = await res.json()

  //   setUpload(data)

  //   const handlePick = () => {
  //     filePicker.current.click();
  //   }

  //   return(
  //     <div>

  //     </div>
  //   )
  // }  


  const handleChange = ({ event }: any) => {
    console.log(event.target.files);
    // setSelectedFile(event.target.files[0])
  }
  //     console.log(event.target.files);
  //     setSelectedFile(event.target.files[0])
  //   }



  const [currentFile, setCurrentFile] = useState();
  const [progress, setProgress] = useState(0);
  // const [message, setMessage] = useState("");
  // const [fileInfos, setFileInfos] = useState>([]);

  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    // setCurrentFile(event.target);
    setProgress(0);
  };

  // const upload = () => {
  //   setProgress(0);
  //   if (!currentFile) return;

  //   UploadService.upload(currentFile, (event: any) => {
  //     setProgress(Math.round((100 * event.loaded) / event.total));
  //   })
  //     .then((response) => {
  //       setMessage(response.data.message);
  //       return UploadService.getFiles();
  //     })
  //     .then((files) => {
  //       setFileInfos(files.data);
  //     })
  //     .catch((err) => {
  //       setProgress(0);

  //       if (err.response && err.response.data && err.response.data.message) {
  //         setMessage(err.response.data.message);
  //       } else {
  //         setMessage("Could not upload the File!");
  //       }

  //       setCurrentFile(undefined);
  //     });
  // };

  return (
    <div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6 lg:col-span-3 flex flex-col justify-end lg:justify-between md:mb-[110px]">
          <h2 className="text-[18px] font-semibold text-[#1D324E]">???????????? ????????????????????</h2>
          <h2 className="text-[18px] font-semibold text-[#1D324E]">?????????????? ????????????</h2>
        </div>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="col-span-12 lg:col-span-6 grid lg:grid-cols-2  max-lg:order-last gap-3">
            <FormField name="name" label="??????" large />
            <FormField name="patronymic" label="???????????????? (???????? ????????)" large />
            <FormField name="surname" label="??????????????" large />
            <FormField name="databorn" label="???????? ????????????????" large type="date" />
            <FormField name="phonenumber" label="?????????? ????????????????" large />
            <FormField name="email" label="??????????" large />
            <FormField name="password" label="???????????? ????????????" large />
            <FormField name="passwordConfirm" label="?????????? ????????????" large />
            <Button color="secondary" variant="outlined" size="large" sx={{ textTransform: "capitalize" }}>
              ????????????????
            </Button>
            <Button onClick={handleChange} type='submit' color="secondary" variant="contained" size="large" sx={{ textTransform: "capitalize" }}>
              ?????????????????? ??????????????????
            </Button>
          </form>
        </FormProvider>
        <div className="col-span-6 lg:col-span-3  flex justify-end lg:justify-center">
          <div className="relative overflow-hidden">
            {/* <input type="file" onChange={selectFile} className="bg-black" /> */}
            <img src={avatar} className="h-[150px] w-[150px] object-cover border-2 border-[#FF7F2C] rounded-md " alt="avatar" />
            {/* <div className="absolute top-0 left-0 w-full h-full bg-white/50  items-end justify-center pb-3 flex">
              ?????????????? ????????
            </div> */}
          </div>
        </div>
        {/* <UploadAvatar selectedFile={selectedFile}/> */}
      </div>
    </div >
  );
}

export default SettingsProfileForm;
