import { useForm, type SubmitHandler } from "react-hook-form"

type Login = {
    email:number,
    password:string
}

function LoginPage() {

    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<Login>();

    function onSubmit(data: Login){
        console.log(data)
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("email")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

      <button type="submit">{isSubmitting ? "SUBMITTING..." : "SUBMIT"}</button>
    </form>
    )
}

export default LoginPage