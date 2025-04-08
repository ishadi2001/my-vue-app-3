<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Mail, Lock, Mail as MailIcon } from "lucide-vue-next";

export default {
  name: 'LoginScreen',
  components: {
    Mail,
    Lock,
    MailIcon
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const store = useStore();
    
    const login = () => {
      if (!email.value || !password.value) {
        alert('Please enter both email and password');
        return;
      }

      store.dispatch('auth/login', {
        email: email.value,
        password: password.value
      })
      .then(() => {
        router.push('/dashboard');
      })
      .catch(error => {
        alert(error.message || 'Login failed. Please try again.');
      });
    };
    
    const forgotPassword = () => {
      router.push('/forgot-password');
    };

    const continueWithEmail = () => {
      router.push('/signup');
    };
    
    const continueWithGoogle = () => {
      store.dispatch('auth/loginWithGoogle')
        .then(() => {
          router.push('/dashboard');
        })
        .catch(error => {
          alert(error.message || 'Google login failed. Please try again.');
        });
    };

    const signUp = () => {
      router.push('/signup');
    };

    const openTerms = () => {
      router.push('/terms');
    };

    const openPrivacyPolicy = () => {
      router.push('/privacy-policy');
    };

    return {
      email,
      password,
      login,
      forgotPassword,
      continueWithEmail,
      continueWithGoogle,
      signUp,
      openTerms,
      openPrivacyPolicy
    };
  }
};
</script>

<template>
  <div class="login-container">
    <div class="content">
      <h2 class="title">Log into your SnoozeWell account</h2>
      
      <div class="form">
        <div class="input-group">
          <div class="icon">
            <Mail size="20" />
          </div>
          <input 
            type="email" 
            v-model="email" 
            placeholder="Email" 
            class="form-input"
          />
        </div>
        
        <div class="input-group">
          <div class="icon">
            <Lock size="20" />
          </div>
          <input 
            type="password" 
            v-model="password" 
            placeholder="Password" 
            class="form-input"
          />
        </div>
        
        <div class="forgot-password">
          <a @click="forgotPassword" class="forgot-link">Forgot Password?</a>
        </div>
        
        <button class="login-button" @click="login">Log in</button>
        
        <div class="divider">
          <div class="line"></div>
          <div class="divider-text">OR</div>
          <div class="line"></div>
        </div>
        
        <button class="email-button" @click="continueWithEmail">
          <MailIcon size="20" />
          <span>Continue with Email</span>
        </button>
        
        <button class="google-button" @click="continueWithGoogle">
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span>Continue with Google</span>
        </button>
        
        <p class="terms-text">
          By tapping Continue or logging into an existing SnoozeWell account, you agree to our 
          <span class="link" @click="openTerms">Terms</span> and 
          acknowledge that you have read our 
          <span class="link" @click="openPrivacyPolicy">Privacy Policy</span>, 
          which explains how to opt out of offers and promos
        </p>
        
        <div class="signup-prompt">
          Have an account? <span class="link" @click="signUp">Sign up</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  flex-grow: 1;
  padding-top: 100px;
}

.title {
  font-size: 17px;
  text-align: center;
  margin-bottom: 24px;
  margin-top: 60px;
  font-weight: 500;
  color: #000000;
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
  color: #000000;
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

.forgot-password {
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
}

.forgot-link {
  color: #000;
  text-decoration: underline;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}

.login-button {
  width: 100%;
  height: 60px;
  background-color: #e0e0e0;
  color: black;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 24px;
}

.divider {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
}

.line {
  flex-grow: 1;
  height: 1px;
  background-color: #e0e0e0;
}

.divider-text {
  padding: 0 16px;
  color: #666;
  font-size: 14px;
  font-weight: 500;
}

.email-button, .google-button {
  width: 100%;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;
  border: none;
}

.email-button {
  background-color: #F6B910;
  color: white;
}

.google-button {
  background-color: #F6B910;
  color: white;
}

.email-button svg, .google-button svg {
  margin-right: 8px;
}

.terms-text {
  font-size: 14px;
  text-align: center;
  color: #666;
  line-height: 1.4;
  margin-bottom: 40px;
  margin-top: 40px;
}

.link {
  color: black;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
}

.signup-prompt {
  text-align: center;
  font-size: 14px;
  color: #333;
}
</style>
