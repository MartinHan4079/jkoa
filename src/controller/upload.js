const uploadRouter = require('koa-router')();
var FormData = require('form-data');
var axios = require('axios');
const fs = require('fs')
const path = require('path')

const url = "https:12312312312312323.com/oss/add-file"

uploadRouter.post('/upload', async (ctx, next) => {

  const file = ctx.request.files.file

  const reader = fs.createReadStream(file.path);
  let filePath = path.join(__dirname, './public/upload/') + `/${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // // 可读流通过管道写入可写流
  reader.pipe(upStream);

  var form = new FormData();
  form.append('file', reader);
  form.append('md5Key ', '89789798837458634586348567348956345863489567438957689345634856834');

  console.log(form, "formformformformformformformformformform++++++++++++++++============================")

  let getHeaders = (form=>{
    return new Promise((resolve,reject)=>{
      form.getLength((err,length)=>{
        if(err) reject(err)
        let headers = Object.assign({'Content-Length':length},form.getHeaders())
        resolve(headers)
      })
    })
  })


  getHeaders(form)
    .then(headers=>{
      return axios.post(url,form,{headers:headers})
    })
    .then((response)=>{
      console.log(response.data, "------------------++++++++++++++++++++++++++++++++++++++++++++++++");
    })
    .catch(e=>{console.log(e)})

    return ctx.body = "上传成功！";

});



module.exports = uploadRouter.routes();
