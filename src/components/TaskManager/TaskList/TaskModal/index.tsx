import { useFormik } from "formik";
import { forwardRef } from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  title: yup.string().required("لطفا عنوان تسک را وارد کنید"),
});

interface ITaskModalProps extends React.PropsWithRef<any> {
  onCompleted: (e: FormProps) => void;
  onClose: () => void;
}

type FormProps = {
  title: string;
};

export const TaskModal: React.FC<ITaskModalProps> = forwardRef(
  ({ onCompleted, onClose }, ref: any): JSX.Element => {
    const formik = useFormik<FormProps>({
      initialValues: {
        title: "",
      },
      validationSchema,
      onSubmit: (data, { resetForm }) => {
        onCompleted(data);
        setTimeout(() => {
          resetForm();
        }, 500);
      },
    });

    return (
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">تسک جدید</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="py-4">
              <input
                type="text"
                placeholder="عنوان تسک"
                className="input w-full"
                value={formik.values.title}
                onChange={formik.handleChange}
                name="title"
                id="title"
              />
              {formik.touched.title && formik.errors.title && (
                <h6 className="text-sm py-2 text-red-500">
                  *{formik.errors.title}
                </h6>
              )}
            </div>
            <div className="flex [&>button]:mx-2">
              <button className="btn btn-primary" type="submit">
                اضافه کردن
              </button>
              <button className="btn" onClick={onClose}>
                بستن
              </button>
            </div>
          </form>
        </div>
      </dialog>
    );
  }
);
