import { useFieldArray, useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit=(data:any)=>{
    console.log(data);    
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field,index)=>(
            <div key={index}>
                <input {...register(`addresses.${index}.street`)} placeholder="Street" />
                <input {...register(`addresses.${index}.city`)} placeholder="City" />
                <button type="button" onClick={()=>remove(index)}>Remove</button>
            </div>
        ))}
        <button type="button" onClick={()=>append({})}>Add Address</button>
        <button type="submit">Submit</button>
    </form>
  )
};

export default App;
