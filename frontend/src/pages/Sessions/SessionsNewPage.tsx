import { Input, Select, Button, TimePicker } from "antd";
import Header from "../../components/Header";
import { useForm, Controller } from "react-hook-form";
import type { TrainingSession } from "../../types/session";

const { TextArea } = Input;

function SessionsNewPage() {

  const { control, handleSubmit, watch, formState: { errors } } = useForm<TrainingSession>({
    defaultValues: {
      title: '',
      description: '',
      primaryTrainer: 'lucy doe',
      category: '',
      startTime: null,
      endTime: null,
      location: '',
      attendees: []
    }
  });

  const onSubmit = (data: TrainingSession) => {
    const formattedData = {
      ...data,
      startTime: data.startTime ? data.startTime.format("HH:mm") : null,
      endTime: data.endTime ? data.endTime.format("HH:mm") : null,
    };
    console.log("Final Submission:", formattedData);
  };

  return (
    <div className="min-h-screen w-screen flex bg-slate-50">
      <main className="flex-1 flex flex-col p-6 lg:p-10 gap-8 max-w-5xl mx-auto">

        <Header title="Create Training Session" subtitle="Complete the information below to organise a new training event." />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">

          {/* CARD 1: SESSION DETAILS */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="flex items-center gap-4 py-4 px-6 bg-slate-50/50 border-b border-slate-200">
              <div className="shrink-0 size-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">1</div>
              <h3 className="text-lg font-semibold text-slate-800 tracking-tight">Session Details</h3>
            </div>

            <div className="p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Session Title</label>
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: "Session title is required" }}
                  render={({ field }) => (
                    <Input {...field} status={errors.title ? "error" : ""} placeholder="e.g. Advanced Diagnostics" className="h-11 rounded-lg" />
                  )}
                />
                {errors.title && <p className="text-xs text-red-500 font-medium">{errors.title.message}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Description</label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextArea {...field} rows={4} placeholder="Objectives..." className="rounded-lg p-3" />
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Primary Trainer</label>
                  <Controller
                    name="primaryTrainer"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} className="h-11 w-full" options={[{ value: 'lucy doe', label: 'Lucy Doe' }]} />
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Training Category</label>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} placeholder="Select category" className="h-11 w-full" options={[{ value: 'leadership', label: 'Leadership' }]} />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: LOCATION & TIME */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="flex items-center gap-4 py-4 px-6 bg-slate-50/50 border-b border-slate-200">
              <div className="shrink-0 size-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">2</div>
              <h3 className="text-lg font-semibold text-slate-800 tracking-tight">Location & Time</h3>
            </div>

            <div className="p-8 flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* TIME INPUTS */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Schedule</label>
                  <div className="flex gap-4">
                    <Controller
                      name="startTime"
                      control={control}
                      render={({ field }) => (
                        <TimePicker {...field} format="HH:mm" className="h-11 flex-1 rounded-lg" placeholder="Start" />
                      )}
                    />
                    <Controller
                      name="endTime"
                      control={control}
                      render={({ field }) => (
                        <TimePicker {...field} format="HH:mm" className="h-11 flex-1 rounded-lg" placeholder="End" />
                      )}
                    />
                  </div>
                </div>

                {/* LOCATION INPUT */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Location / Venue</label>
                  <Controller
                    name="location"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} placeholder="e.g. Virtual or Office Room 1" className="h-11 rounded-lg" />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: ATTENDEES */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="flex items-center gap-4 py-4 px-6 bg-slate-50/50 border-b border-slate-200">
              <div className="shrink-0 size-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">3</div>
              <h3 className="text-lg font-semibold text-slate-800 tracking-tight">Attendee Picker</h3>
            </div>

            <div className="p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Select Team Members</label>
                <Controller
                  name="attendees"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      mode="multiple"
                      allowClear
                      className="w-full min-h-11"
                      placeholder="Search and add attendees..."
                      options={[
                        { value: 'Alex Rivera', label: 'Alex Rivera' },
                        { value: 'Jordan Smith', label: 'Jordan Smith' },
                        { value: 'Taylor Wong', label: 'Taylor Wong' },
                        { value: 'Morgan Lee', label: 'Morgan Lee' },
                      ]}
                      tagRender={(props) => {
                        const { label, closable, onClose } = props;
                        return (
                          <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 m-1 rounded-md border border-blue-100 text-xs font-semibold">
                            {label}
                            {closable && (
                              <button onClick={onClose} className="hover:text-blue-900 ml-1">x</button>
                            )}
                          </span>
                        );
                      }}
                    />
                  )}
                />
                <p className="text-xs text-slate-400">
                  You can add individual users or entire departments.
                </p>
              </div>

              {/* Quick Stat (Optional Polish) */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-center justify-between">
                <span className="text-sm text-slate-600 font-medium">Total Attendees Selected:</span>
                <span className="bg-white px-3 py-1 rounded-full border border-slate-200 text-sm font-bold text-blue-600 shadow-sm">
                  {/* We use watch() to get live count */}
                  {watch("attendees")?.length || 0}
                </span>
              </div>
            </div>
          </div>

          {/* FINAL GLOBAL ACTION */}
          <div className="flex justify-end gap-4 items-center bg-slate-100 p-6 rounded-xl border border-dashed border-slate-300">
            <p className="hidden md:block text-sm text-slate-500 font-medium">Ensure all sections are complete before saving.</p>
            <Button type="primary" htmlType="submit" className="h-12 px-10 rounded-lg bg-blue-600 font-bold shadow-lg shadow-blue-200 border-none">
              Create Session
            </Button>
          </div>

        </form>
        
      </main>
    </div>
  );
}

export default SessionsNewPage;