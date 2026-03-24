import Header from "../../components/Header"
import { Badge, Input, Select, SortableTable } from "../../components"
import IconHeader from "../../components/IconHeader"
import { Divider, Button } from "../../components"
import { DynamicIcon } from "lucide-react/dynamic"
import { useState } from "react"
import type { Column } from "../../components/SortableTable"

const placeholderJobTitles = [
	{ value: "", label: "", disabled: false },
	{ value: "technician", label: "Technician", disabled: false },
	{ value: "admin-clerk", label: "Admin-Clerk", disabled: false },
	{ value: "supervisor", label: "Supervisor", disabled: false },
]

interface TrainingModule {
	id: string;
	moduleName: string;
	duration: number;
	status: "pending" | "in-progress" | "completed";
	dueDate: string;
}

const placeholderTrainingData: TrainingModule[] = [
	{
		id: "1",
		moduleName: "Company Onboarding",
		duration: 4,
		status: "pending",
		dueDate: "2024-01-20",
	},
	{
		id: "2",
		moduleName: "Safety & Compliance",
		duration: 6,
		status: "pending",
		dueDate: "2024-01-27",
	},
	{
		id: "3",
		moduleName: "Role-Specific Training",
		duration: 8,
		status: "in-progress",
		dueDate: "2024-02-10",
	},
	{
		id: "4",
		moduleName: "Software Tools & Systems",
		duration: 5,
		status: "pending",
		dueDate: "2024-02-17",
	},
	{
		id: "5",
		moduleName: "Advanced Product Knowledge",
		duration: 10,
		status: "pending",
		dueDate: "2024-03-02",
	},
]

const trainingColumns: Column<TrainingModule>[] = [
	{
		key: "moduleName" as const,
		label: "Module Name",
		sortable: true,
	},
	{
		key: "duration" as const,
		label: "Duration (hours)",
		sortable: true,
	},
	{
		key: "status" as const,
		label: "Status",
		sortable: true,
		render: (value: TrainingModule["status"]) => {
			const variants = {
				pending: "secondary",
				"in-progress": "warning",
				completed: "success",
			} as const;
			return <Badge variant={variants[value as keyof typeof variants]}>{value}</Badge>;
		},
	},
	{
		key: "dueDate" as const,
		label: "Due Date",
		sortable: true,
	},
]

function EmployeesNewPage() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		hireDate: new Date(),
		jobTitle: ""
	});

	function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	return (
		<div className="min-h-screen flex">
			<main className="flex-1 flex flex-col p-6 lg:p-10 gap-8">
				<Header title={"Onboard New Employee"} subtitle="Initialise a training profile and assign learning path for new hire." />

				<div className="flex gap-8">
					{/* LHS */}
					<div className="flex flex-col gap-8">
						{/* Employee Details */}
						<div className="flex flex-col gap-4 bg-white rounded-xl shadow p-4 min-w-2xl">
							{/* Icon + Title */}
							<IconHeader icon="user-pen" title="Employee Details" />
							{/* Row1 */}
							<div className="flex gap-2">
								<div className="flex flex-col gap-2 w-full">
									<h3 className="text-gray-500 text-xs">Full Name</h3>
									<Input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter employee name..." />
								</div>
								<div className="flex flex-col gap-2 w-full">
									<h3 className="text-gray-500 text-xs">Email Address</h3>
									<Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter email address..." />
								</div>
							</div>
							{/* Row2 */}
							<div className="flex gap-2">
								<div className="flex flex-col gap-2 w-full">
									<h3 className="text-gray-500 text-xs">Hire Date</h3>
									<Input name="hireDate" value={formData.hireDate.toString()} onChange={handleChange} placeholder="Enter employee name..." />
								</div>
								<div className="flex flex-col gap-2 w-full">
									<h3 className="text-gray-500 text-xs">Job Title</h3>
									<Select name="jobTitle" value={formData.jobTitle} onChange={handleChange} options={placeholderJobTitles} />
								</div>
							</div>
						</div>

						{/* Assigned Training Path */}
						<div className="flex flex-col gap-4 bg-white rounded-xl shadow p-4 min-w-2xl">
							<div className="flex justify-between items-center">
								{/* Icon + Title */}
								<IconHeader icon="graduation-cap" title="Assigned Training Path" />
								<Badge variant="primary">Role: {formData.jobTitle === "" ? "N/A" : formData.jobTitle.toUpperCase()}</Badge>
							</div>
							<SortableTable data={placeholderTrainingData} columns={trainingColumns} rowKey="id" />
						</div>
					</div>

					{/* RHS */}
					<div className="flex flex-col gap-8">
						<div className="flex gap-2 flex-col p-4 bg-blue-500 rounded-xl shadow">
							<h1 className="text-white font-semibold">Onboarding Summary</h1>
							<div className="flex justify-between text-white">
								<h3>Trainee</h3>
								<h3>{formData.fullName === "" ? "N/A": formData.fullName}</h3>
							</div>
							<Divider />
							<div className="flex justify-between text-white">
								<h3>Total Kits</h3>
								<h3>0</h3>
							</div>
							<Divider />
							<div className="flex justify-between text-white">
								<h3>Total Modules</h3>
								<h3>0</h3>
							</div>
							<Divider />
							<div className="flex justify-between text-white">
								<h3>Est. Time</h3>
								<h3>~0 mins</h3>
							</div>
							<Button variant="outline" className="flex gap-4 text-blue-500">
								<DynamicIcon name="user-plus" />
								Confirm Onboarding
							</Button>
						</div>
						<div className="flex-1 flex-col p-4 bg-white rounded-xl shadow">
							<IconHeader icon="hourglass" title="Employee Details" />
							<Button variant="outline" className="flex gap-4 text-blue-500">
								<DynamicIcon name="eye" />
								View All Trainees
							</Button>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default EmployeesNewPage