import{_ as d,j as t,a as e,n as u}from"./app-d8dad8c6.js";import{G as c}from"./GuestLayout-6bff1055.js";import{T as p,I as w}from"./TextInput-ac049429.js";import{P as f}from"./PrimaryButton-7f56618b.js";import"./ApplicationLogo-3d584a40.js";function v({status:s}){const{data:o,setData:r,post:m,processing:l,errors:i}=d({email:""}),n=a=>{r(a.target.name,a.target.value)};return t(c,{children:[e(u,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),t("form",{onSubmit:a=>{a.preventDefault(),m(route("password.email"))},children:[e(p,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,onChange:n}),e(w,{message:i.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(f,{className:"ml-4",disabled:l,children:"Email Password Reset Link"})})]})]})}export{v as default};
