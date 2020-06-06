import React, { useState, useContext } from "react";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import {
  Button,
  TextField,
  NativeSelect
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
//errorText from utility directory
import ErrorText from "../../util/errorText";

import TableDetails from "./tabledetails";

//redux
import useUtilActions from '../../../actions/utilActions'

import MainBookingLayout from '../mainBookingLayout'

export default () => {

  let { setBookingStepValue } = useUtilActions()
    
    React.useEffect(() => {
        setBookingStepValue("bookingStep3")
    },[])

  const defaultValues = {
    // firstName: store.user.firstName,
    // lastName: store.user.lastName,
    // age: store.user.age,
    // fatherName: store.user.fatherName,
    // cnic: store.user.cnic,
    // gender: store.user.gender,
    // city: store.user.address.city,
    // postalcode: store.user.address.postalCode,
    // province: store.user.address.province,
    // permanentaddress: store.user.address.permanentaddress
  };

  const { push } = useHistory();

  //react-hook-form

  const { handleSubmit, errors, rules, control } = useForm({ defaultValues });

  //form onsubmitHandler
  const onSubmit = (data, e) => {
    e.preventDefault();
    push("/InvestorForm/investorform-two");
  };


  return (
    <MainBookingLayout>
    <div style={{ backgroundColor: "#202021" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container pr-3 pl-3">
          <h5
            className="pt-5"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white"
            }}
          >
            PERSONAL INFORMATION
          </h5>
          <hr style={{ backgroundColor: "white" }} />
          <div className="row pt-5 pb-3 pl-5 pr-5">
            <section className="col-md-6 col-sm-12 pb-5 allPaddingInput">
              <Controller
                placeholder="First Name"
                fullWidth
                as={<TextField />}
                name="firstName"
                control={control}
                rules={{ required: true }}
              />
              <ErrorMessage
                errors={errors}
                name="firstName"
                as={<ErrorText message="required*" />}
              />
            </section>

            <section className="col-md-6 col-sm-12 allPaddingInput pb-5">
              <Controller
                fullWidth
                as={<TextField />}
                placeholder="Last Name"
                name="lastName"
                control={control}
                rules={{ required: true }}
              />
              <ErrorMessage
                errors={errors}
                name="lastName"
                as={<ErrorText message="required*" />}
              />
            </section>

            <section className="col-md-6 col-sm-12 allPaddingInput pb-5">
              <Controller
                fullWidth
                as={<TextField />}
                placeholder="Age"
                name="age"
                control={control}
                rules={{ required: true }}
              />
              <ErrorMessage
                errors={errors}
                name="age"
                as={<ErrorText message="required*" />}
              />
            </section>

            <section className="col-md-6 col-sm-12 allPaddingInput pb-5">
              <Controller
                fullWidth
                as={<TextField />}
                placeholder="Father Name"
                name="fatherName"
                control={control}
                rules={{ required: true }}
              />
              <ErrorMessage
                errors={errors}
                name="fatherName"
                as={<ErrorText message="required*" />}
              />
            </section>

            <section className="col-md-6 col-sm-12 allPaddingInput pb-5">
              <Controller
                fullWidth
                as={<TextField />}
                placeholder="Age"
                name="age"
                control={control}
                rules={{ required: true }}
              />
              <ErrorMessage
                errors={errors}
                name="age"
                as={<ErrorText message="required*" />}
              />
            </section>

            <section className="col-md-6 col-sm-12 allPaddingInput pb-5">
              <Controller
                fullWidth
                as={<TextField />}
                placeholder="Father Name"
                name="fatherName"
                control={control}
                rules={{ required: true }}
              />
              <ErrorMessage
                errors={errors}
                name="fatherName"
                as={<ErrorText message="required*" />}
              />
            </section>
          </div>
        </div>

        <div className="container allPaddingInput" style={{ color: "white" }}>
          <h4
            className="pt-5"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white"
            }}
          >
            PAYMENT
          </h4>

          {/* Toggle Between PayOnline or PayLater */}

          <hr style={{ backgroundColor: "white" }} />

          {/* {isPayLater ? (
            <div>
              <h6>YOUR SELECTION : PAY LATER</h6>
              <p
                className="small"
                style={{ textAlign: "left", color: "#5f83de" }}
              >
                >{" "}
                <a
                  className="payclass"
                  onClick={() => setisPayLater(!isPayLater)}
                >
                  Or Pay Online
                </a>
              </p>
            </div>
          ) : (
            <div>
              <h6>YOUR SELECTION : PAY ONLINE</h6>
              <p
                className="small"
                style={{ textAlign: "left", color: "#5f83de" }}
              >
                >{" "}
                <a
                  className="payclass"
                  onClick={() => setisPayLater(!isPayLater)}
                >
                  Or Pay Later
                </a>
              </p>
            </div>
          )} */}

          {/* {isPayLater ? (
            ""
          ) : ( */}
            <div className="row p-5">
              <div className="col-sm-12 col-md-3 pb-4 pt-2">
                <Controller
                  fullWidth
                  as={<TextField />}
                  placeholder="Card Holder Name"
                  name="cardHolderName"
                  control={control}
                  rules={{ required: true }}
      
                />
                <ErrorMessage
                  errors={errors}
                  name="cardHolderName"
                  as={<ErrorText message="required*" />}
                />
              </div>

              <div className="col-sm-12 col-md-3 pb-4 pt-2">
                <Controller
                  fullWidth
                  as={<TextField />}
                  placeholder="Card Number"
                  name="cardNumber"
                  control={control}
                  rules={{ required: true }}

                />
                <ErrorMessage
                  errors={errors}
                  name="cardNumber"
                  as={<ErrorText message="required*" />}
                />
              </div>

              <div className="col-sm-12 col-md-2 pt-2">
                <Controller
                  as={
                    <NativeSelect>
                      <option value="">Month</option>
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                      <option value="5">05</option>
                      <option value="6">06</option>
                      <option value="7">07</option>
                      <option value="8">08</option>
                      <option value="9">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </NativeSelect>
                  }
                  label="cardMonth"
                  name="cardMonth"
                  control={control}
                  rules={{ required: true }}

                  fullWidth
                />
                <ErrorMessage
                  errors={errors}
                  name="cardMonth"
                  as={<ErrorText message="required*" />}
                />
              </div>

              <div className="col-sm-12 col-md-2 pt-2">
                <Controller
                  as={
                    <NativeSelect>
                      <option value="">Year</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                    </NativeSelect>
                  }
                  label="cardYear"
                  name="cardYear"
                  control={control}
                  rules={{ required: true }}

                  fullWidth
                />
                <ErrorMessage
                  errors={errors}
                  name="cardYear"
                  as={<ErrorText message="required*" />}
                />
              </div>

              <div className="col-sm-12 col-md-2 pb-4 pt-2">
                <Controller
                  fullWidth
                  as={<TextField />}
                  placeholder="Card Civ"
                  name="cardCiv"
                  control={control}
                  rules={{ required: true }}

                />
                <ErrorMessage
                  errors={errors}
                  name="cardCiv"
                  as={<ErrorText message="required*" />}
                />
              </div>
            </div>
          {/* )} */}
        </div>

        {/* <ReservationDetails /> */}

     
     
     
     
     
     
     <TableDetails />
















        {/* Button */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "1rem"
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="rounded-0"
            style={{ outline: "none" }}
          >
            BOOK NOW
          </Button>
        </div>
      </form>

      {/* <style jsx>{`
        .allPaddingInput {
          padding-left: 3rem;
          padding-right: 3rem;
        }

        .payclass {
          border-bottom: 1px solid #5f83de;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .allPaddingInput {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style> */}
      </div>
      </MainBookingLayout>
  );
};
