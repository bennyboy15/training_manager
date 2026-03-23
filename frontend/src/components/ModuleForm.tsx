import { Input } from "./Input"
import { Select } from "./Select"
import { Textarea } from "./Textarea"
import { Button } from "./Button"
import { useForm } from "react-hook-form"
import axiosInstance from "../utils/axios"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

type ModuleType = {
    name: string;
    description:string;
    duration: number;
    trainingType: string;
    expiry: number
}

async function createModule(data: ModuleType) {
    const res = await axiosInstance.post("/modules", data);
    return res.data;
}

function ModuleForm() {
    const { register, handleSubmit, } = useForm<ModuleType>();
    
    const mutation = useMutation({
            mutationFn: createModule,
            onSuccess: () => {
                toast.success("Successfully created new training module");
            },
            onError: () => {
                toast.error("Failed to crate training modul");
            }
        });

    const onSubmit = (data:ModuleType) => {
        mutation.mutate(data);
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <p className="text-gray-600">Module Name</p>
                <Input {...register("name", { required: true })} placeholder="Enter module name here..." />
            </div>
            <div className="flex flex-col">
                <p className="text-gray-600">Description</p>
                <Textarea {...register("description", { required: true })} placeholder="Description here..." />
            </div>
            <div className="flex gap-4">
                <div className="flex-1 flex-col">
                    <p className="text-gray-600">Duration (Minutes)</p>
                    <Input {...register("duration", { required: true })} type="number" min="0" />
                </div>
                <div className="flex-1 flex-col">
                    <p className="text-gray-600">Training Type</p>
                    <Select {...register("trainingType", { required: true })} options={[{ value: "Test", label: "Test" }]} />
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex-1 flex-col">
                    <p className="text-gray-600">Expiry (Days)</p>
                    <Input {...register("expiry", { required: true })} type="number" min="0" />
                </div>
                <div className="flex-1">

                </div>
            </div>
            <Button type="submit" variant="primary">Submit</Button>
        </form>
    )
}

export default ModuleForm