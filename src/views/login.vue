<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import HelloWorld from "../components/HelloWorld.vue";
import { ChevronLeft, Mail, Lock } from "lucide-vue-next";

export default {
  name: "SignupScreen",
  components: { HelloWorld, ChevronLeft, Mail, Lock },
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const store = useStore();
    const goBack = () => {
      router.go(-1);
    };
    const continueSignup = () => {
      if (!email.value || !password.value) {
        alert("Please enter both email and password");
        return;
      }
      store
        .dispatch("auth/register", {
          email: email.value,
          password: password.value,
        })
        .then(() => {
          router.push("/onboarding");
        })
        .catch((error) => {
          alert(error.message || "Registration failed. Please try again.");
        });
    };
    const openTerms = () => {
      router.push("/terms");
    };
    const openPrivacyPolicy = () => {
      router.push("/privacy-policy");
    };
    return {
      email,
      password,
      goBack,
      continueSignup,
      openTerms,
      openPrivacyPolicy,
    };
  },
};
</script>
<template>
  <div class="signup-container">
    <div class="header">
      <button class="back-button" @click="goBack">
        <ChevronLeft size="24" />
      </button>
    </div>
    <div class="content">
      <h2 class="title">Create an account to<br />save your progress</h2>
      <div class="form">
        <div class="input-group">
          <div class="icon"><Mail size="20" /></div>
          <input
            type="email"
            v-model="email"
            placeholder="Email"
            class="form-input"
          />
        </div>
        <div class="input-group">
          <div class="icon"><Lock size="20" /></div>
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="form-input"
          />
        </div>
        <button class="continue-button" @click="continueSignup">
          Continue
        </button>
        <p class="terms-text">
          By tapping Continue or logging into an existing SnoozeWell account,
          you agree to our
          <span class="link" @click="openTerms">Terms</span> and acknowledge
          that you have read our
          <span class="link" @click="openPrivacyPolicy">Privacy Policy</span>,
          which explains how to opt out of offers and promos
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}
.header {
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
.back-button {
  background: none;
  color: black;
  border: none;
  cursor: pointer;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 8px;
  width: 100%;
  text-align: left;
}
.content {
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  flex-grow: 1;
}
.title {
  font-size: 20px;
  text-align: center;
  margin-top: 120px;
  margin-bottom: 40px;
  font-weight: 500;
}
.form {
  width: 100%;
  max-width: 360px;
}
.input-group {
  display: flex;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 25px;
  padding: 0 15px;
  margin-bottom: 16px;
  height: 50px;
  background-color: white;
}
.icon {
  margin-right: 10px;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.form-input {
  flex-grow: 1;
  border: none;
  height: 100%;
  font-size: 16px;
  background: transparent;
  color: #000000;
  outline: none;
}
.continue-button {
  width: 100%;
  height: 60px;
  background-color: #e0e0e0;
  color: black;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 16px;
}
.terms-text {
  font-size: 14px;
  text-align: center;
  color: #666;
  line-height: 1.4;
}
.link {
  color: black;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
}
</style>
