import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const consigneeAction = createAsyncThunk("consignee", async (consignee) => {
  try {
    const { data } = await axios("/api/consignee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(consignee),  
    });

    return data;
  } catch (error) {
    return error;
  }
});

const getAllConsignees = createAsyncThunk("getAllConsignee", async (search) => {
  try {
    const { data } = await axios.get(`/api/consignees/${search}`);
    return data;
  } catch (error) {
    return error;
  }
});

const getConsignee = createAsyncThunk("getConsignee", async (id) => {
  try {
    const { data } = await axios.get(`/api/consignee/${id}`);
    return data.response;
  } catch (error) {
    return error;
  }
});

const updateConsignees = createAsyncThunk("updateConsignee", async (consignee) => {
  const {id,name,companyName,phone,email,address1,address2,city,state,pincode} = consignee
  try {
    const { data } = await axios(`/api/consignee/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: { name,companyName,phone,email,address1,address2,city,state,pincode },
    });
    return data;
  } catch (error) {
    return error;
  }
});

export { consigneeAction, getAllConsignees,getConsignee,updateConsignees };
