import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./styleForm/scssForm.scss";
import { VscChromeClose } from "react-icons/vsc";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mui/material";
export default function FormModal({ active, setActive, onClose }) {
  const [state, setState] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode:"onBlur"
  });
  const doState = () => {
    setState(false);
    onClose();
  };
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div className="header_modal">
      <div className="blockCross">
        <VscChromeClose className="closeCross" onClick={doState} />
      </div>
      <main className="modal_background">
        <div className="modal_content">
          <img
            src={require("../../images/Form_image/Form1.jpg")}
            className="image_form"
            alt="error"
          />
          <div className="form">
            <h2>Send request</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="data">
                <label>
                  <TextField
                    fullWidth
                    label="name"
                    {...register("name", {
                      required: true,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                    style={{ marginBottom: "15px" }}
                  />
                  {errors?.name && <p style={{ color: "red" }}>Error</p>}
                </label>
                <label>
                  <TextField
                    fullWidth
                    label="surname"
                    style={{ marginBottom: "15px" }}
                    {...register("surname", {
                      required: true,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                </label>
                {errors?.surname && <p style={{ color: "red" }}>Error</p>}
                <label>
                  <TextField
                    fullWidth
                    label="email"
                    style={{ marginBottom: "15px" }}
                    {...register("email", {
                      required: true,
                      // pattern:
                      //   "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
                      pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                    })}
                  />
                  {errors?.email && <p style={{ color: "red" }}>Error</p>}
                </label>
                <label>
                  <TextField
                    fullWidth
                    label="Number phone"
                    style={{ marginBottom: "15px" }}
                    {...register("phone", {
                      required: true,
                      // pattern:"^\d{3}-\d{3}-\d{4}$|^\d{10}$",
                      // pattern:/^\d{3}-\d{3}-\d{4}$|^\d{10}$ /,
                      minLength: 10,
                    })}
                  />
                  {errors?.phone && <p style={{ color: "red" }}>Error</p>}
                </label>
                <label>
                  <TextareaAutosize
                    style={{
                      width: "500px",
                      height: "150px",
                      minLength: 10,
                    }}
                    placeholder="Enter text"
                  />
                </label>
                <div className="button_submit">
                  <Button
                    variant="contained"
                    type="submit"
                    style={{ width: "500px" }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
