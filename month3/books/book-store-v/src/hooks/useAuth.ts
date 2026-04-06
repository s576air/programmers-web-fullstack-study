import { login, resetPassword, resetRequest, signup } from "@/api/auth.api";
import type { SignupProps as LoginProps } from "@/pages/Login";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "@/hooks/useAlert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useAuth = () => {
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const { storeLogin, storeLogout, isLoggedIn } = useAuthStore();

  // 메서드
  const userLogin = (data: LoginProps) => {
    login(data).then(
      (res) => {
        // 상태 변화
        storeLogin(res.token);

        showAlert("로그인이 완료되었습니다.");
        navigate("/");
      },
      (error) => {
        showAlert("로그인이 실패했습니다." + error);
      }
    );
  };

  const userSignup = (data: LoginProps) => {
    signup(data).then(
      (res) => {
        // 성공
        showAlert("회원가입이 완료되었습니다." + res);
        navigate("/login");
      },
      (error) => {
        // 실패 처리도 추가..
        showAlert("회원가입에 실패했습니다." + error);
      }
    );
  };

  const userResetPassword = (data: LoginProps) => {
    resetPassword(data).then(() => {
      showAlert("비밀번호가 초기화되었습니다.");
      navigate("/login");
    });
  };

  const [resetRequested, setResetRequested] = useState(false);

  const userResetRequest = (data: LoginProps) => {
    resetRequest(data).then(() => {
      setResetRequested(true);
    });
  };

  // 리턴
  return {
    userLogin,
    userSignup,
    userResetPassword,
    userResetRequest,
    resetRequested
  };
};