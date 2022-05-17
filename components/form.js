import FormBillComponent from "./form/bill";
import FormTipComponent from "./form/tip";
import FormPeopleComponent from "./form/people";

function FormComponent() {
  return (
    <div className="w-full md:w-[50%]">
      <form action="">
        <FormBillComponent />
        <FormTipComponent />
        <FormPeopleComponent />
      </form>
    </div>
  );
}

export default FormComponent;
