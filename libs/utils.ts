import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const saveToSecureStore = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getFromSecureStore = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};

export const deleteFromSecureStore = async (key: string) => {
  return await SecureStore.deleteItemAsync(key);
};



export const errorHandler =(error:Error)=> { 
  if (axios.isAxiosError(error)) {
    if (error.response) { 
      return error.response.data.message
    } else {
      return error.message
    }
  } 

  if (error instanceof Error) {
     return error.message
  }
}