import Header from '../../components/Header';
import ModuleForm from '../../components/ModuleForm';

function ModulesNewPage() {
  return (
    <div className="min-h-screen w-screen flex">
      <main className="flex-1 flex flex-col p-6 lg:p-10 gap-8">
        <Header title={"New Training Module"} subtitle="Create new training module." />
        <div className='p-8 bg-white rounded-xl shadow-xl border border-slate-200'>
        <ModuleForm /> 
        </div>
      </main>
    </div>
  );
}

export default ModulesNewPage;
