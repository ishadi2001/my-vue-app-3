<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "WelcomeScreen",
  setup() {
    const router = useRouter();
    
    const startQuestionnaire = () => {
      router.push("/questionnaire");
    };
    
    return {
      startQuestionnaire
    };
  },
};
</script>

<template>
  <div class="welcome-container">
    <div class="content">
      <div class="illustration-container">
        <!-- Embedded SVG instead of external file -->
        <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" class="illustration">
          <!-- Background circle is already provided by the container's background color -->
          
          <!-- Moon -->
          <path d="M140 60 A20 20 0 1 1 160 80" fill="#c4b5e9" />
          
          <!-- Clouds -->
          <path d="M120 70 Q130 60 140 65 Q150 60 160 65 Q170 70 165 80 Q155 85 145 80 Q135 85 125 80 Q115 75 120 70" fill="#e8e3f5" />
          <path d="M180 90 Q190 80 200 85 Q210 80 220 85 Q230 90 225 100 Q215 105 205 100 Q195 105 185 100 Q175 95 180 90" fill="#e8e3f5" />
          
          <!-- Person silhouette -->
          <g transform="translate(120, 130)">
            <!-- Head -->
            <circle cx="0" cy="-40" r="10" fill="#333" />
            
            <!-- Arms -->
            <path d="M0 -30 L-25 -20 L-20 -10" stroke="#333" stroke-width="4" fill="none" />
            <path d="M0 -30 L25 -45 L30 -35" stroke="#333" stroke-width="4" fill="none" />
            
            <!-- Body -->
            <path d="M0 -30 L0 10" stroke="#333" stroke-width="4" fill="none" />
            
            <!-- Legs -->
            <path d="M0 10 L-15 40" stroke="#446b9e" stroke-width="10" fill="none" />
            <path d="M0 10 L15 40" stroke="#446b9e" stroke-width="10" fill="none" />
          </g>
          
          <!-- Bed silhouette -->
          <rect x="160" y="170" width="40" height="20" fill="#333" />
          <rect x="155" y="165" width="50" height="5" fill="#eee" />
          <rect x="160" y="190" width="5" height="10" fill="#333" />
          <rect x="195" y="190" width="5" height="10" fill="#333" />
          
          <!-- Nightstand -->
          <rect x="110" y="175" width="20" height="25" fill="#333" />
          <rect x="110" y="170" width="20" height="5" fill="#eee" />
          <rect x="115" y="175" width="5" height="5" fill="#446b9e" />
        </svg>
      </div>
      
      <div class="welcome-text">
        <h1 class="title">Welcome to SnoozeWell!</h1>
        <p class="description">
          Let's personalize your experience to help you sleep better and stay active.
        </p>
      </div>
      
      <button class="start-button" @click="startQuestionnaire">
        Let's Snooze
      </button>
    </div>
  </div>
</template>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  padding: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  text-align: center;
}

.illustration-container {
  margin-bottom: 40px;
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e8e3f5;
  border-radius: 50%;
  overflow: hidden;
}

.illustration {
  width: 100%;
  height: auto;
}

.welcome-text {
  margin-bottom: 48px;
}

.title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: #000;
}

.description {
  font-size: 16px;
  font-weight: 400;
  color: #000;
  line-height: 1.5;
  margin: 0;
}

.start-button {
  background-color: #ffc107;
  color: #000;
  border: none;
  border-radius: 50px;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  max-width: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>