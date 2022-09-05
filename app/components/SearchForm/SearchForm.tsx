import { useFetcher, useSubmit } from "@remix-run/react";
import { Form, Button, Row, Col, Select, Divider, Input } from "antd";
import { useSearchForm } from "~/hooks";
import { serialize } from "object-to-formdata";
import { removeEmptyValuesFromObject } from "~/utils";

const SearchForm = () => {
  const formSubmitFetcher = useFetcher();
  const submit = useSubmit();
  const [formInstance] = Form.useForm();
  const form = useSearchForm(formInstance);

  return (
    <Form
      method="get"
      style={{ border: "1px solid grey", width: 500, padding: 20 }}
      form={formInstance}
      layout="vertical"
      id="search-devices-form"
      onFinish={(formValues) => {
        // clear empty fields
        const sanitizedFormValues = removeEmptyValuesFromObject(formValues);
        console.log(`sanitizedFormValues--->`, sanitizedFormValues);
        const formData = serialize(sanitizedFormValues);
        console.log(`formData ->`, formData);
        console.log(`ON FINISHED CALLED ---sanitizedFormValues `, formValues);

        // submit(formData, { replace: false });
        submit(formData, { replace: true, method: "get" });

        // formSubmitFetcher.submit(formData, { method: "get" });
      }}
      initialValues={{}}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="Site"
            data-testid="search-filters-site"
            tooltip="Site is a required field"
          >
            <Select
              placeholder="Select Site"
              showSearch
              allowClear
              mode="multiple"
              showArrow
            >
              {["lca1", "lva1", "lor1", "ltx1"].map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="alias"
            label="Alias"
            data-testid="search-filters-alias"
          >
            <Input placeholder="Enter Alias" allowClear />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="device_model"
            label="Device Model"
            data-testid="search-filters-device-model"
          >
            <Select
              placeholder="Select Device Model"
              showSearch
              allowClear
              mode="multiple"
              showArrow
            >
              {["1st gen", "2nd gen", "3rd gen", "4th gen"].map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="device_os"
            label="Device OS"
            data-testid="search-filters-device-os"
          >
            <Select
              placeholder="Select Device OS"
              showSearch
              allowClear
              mode="multiple"
              showArrow
            >
              {["apple", "android", "windows", "ubuntu"].map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Divider style={{ marginTop: 40 }} />
      <Row gutter={16} style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={form.handleClearForm} style={{ marginRight: "auto" }}>
          Clear Form Fields
        </Button>

        <Button onClick={form.handleFormSubmit} style={{ marginRight: "1rem" }}>
          Cancel
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Row>
    </Form>
  );
};

export default SearchForm;
