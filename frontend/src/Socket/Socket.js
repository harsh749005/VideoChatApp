import { useContext } from "react";
import { SocketContext } from "../Providers/SocketProvider";

export const useSocket = () => {
  return useContext(SocketContext);
};
