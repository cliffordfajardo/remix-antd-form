import { type FormInstance, notification } from "antd";

export const useSearchForm = (formInstance: FormInstance<any>) => {
  const handleClearForm = () => {
    formInstance.resetFields();
    notification.info({
      message: "Cleared form filters",
    });
  };
  const handleFormSubmit = (formValues: any) => {
    console.log(`formValues -->`, formValues);
  };

  return {
    handleClearForm,
    handleFormSubmit,
  };
};
