import { useRecoilValue } from "recoil"
import { erroState }  from "../atom"

export const useMensagemDeErro = () =>{
  const msgErro = useRecoilValue(erroState)

  return msgErro;
}

export default useMensagemDeErro;
