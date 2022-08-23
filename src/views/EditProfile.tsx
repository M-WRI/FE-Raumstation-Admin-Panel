// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
// COMPONENTS
import { Form } from "../components/Form.component";
import { FormItem } from "../components/FormItem.component";
// STYLES
import styles from "../styles/EditProfile.module.scss";
import { Button } from "../components/Button.component";

export const EditProfile = (): JSX.Element => {
  // const user = useSelector((state: RootState) => state.user);
  // const company = useSelector((state: RootState) => state.company);

  return (
    <div className={styles.container}>
      <Form>
        <div className={styles.formDevider}>
          <FormItem type="text" name="firstName" title="First Name" />
          <FormItem type="text" name="lastName" title="Last Name" />
        </div>
        <FormItem type="email" name="email" title="Email" />
        <div className={styles.formDevider}>
          <FormItem type="text" name="floor" title="Floor" />
          <FormItem type="text" name="seat" title="Seat" />
        </div>

        <Button type="S" text="Update Contact Information" center />
      </Form>

      <Form>
        <FormItem type="text" name="companyName" title="Company Name" />
        <FormItem type="text" name="description" title="Description" />
        <FormItem type="text" name="field" title="Field" />
        <Button type="S" text="Update Company Information" center />
      </Form>
    </div>
  );
};
