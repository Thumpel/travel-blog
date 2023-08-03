import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { VscChromeClose } from "react-icons/vsc";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function BookForm({active, setActive, onClose}) {
  const [state, setState] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
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
    <main className="book_background">
      <div className="blockCross">
        <VscChromeClose className="closeCross" onClick={doState} />
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h2>Book a date</h2>
        <label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Basic date picker" />
            </DemoContainer>
          </LocalizationProvider>
        </label>
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
                <div className="button_submit">
                  <Button
                    variant="contained"
                    type="submit"
                    style={{ width: "500px" }}
                  >
                    Submit
                  </Button>
                </div>
      </form>
    </main>
  );
}
