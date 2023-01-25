import * as Yup from "yup";

export const formSchema = Yup.object({
  full_name: Yup.string().required("Please Enter Full Name"),
  ndis_number: Yup.number().required("Please Enter NDIS Registration Number"),
  phone_number: Yup.string().required("Please Enter Valid Phone Number"),
  email: Yup.string().required("Please Enter Valid Eamil"),
  qualifications: Yup.string().required("Please Enter Qualifications"),
  date_of_assesment: Yup.string().required("Please Enter Date of Assesment"),
  date_of_report: Yup.string().required("Please Enter Date of Report"),
  plan_method: Yup.string().required("Please Select a Plan Method"),
  plan_provider: Yup.string().required("Please Enter Name of Plan Provider"),
  contact_person: Yup.string().required("Please Enter Name of Contact Person"),
  plan_phone: Yup.string().required("Please Enter Phone"),
  plan_email: Yup.string().required("Please Enter Email"),
  plan_goals: Yup.string().required("Please Enter Goals"),
});
