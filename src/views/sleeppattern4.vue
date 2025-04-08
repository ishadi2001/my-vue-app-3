<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ChevronLeft } from "lucide-vue-next";

export default {
  name: "SleepQuestionnaire",
  components: { ChevronLeft },
  setup() {
    const router = useRouter();
    const currentStep = ref(1);
    const totalSteps = 3;
    
    // Track selected answers
    const sleepEnvironment = ref(null);
    const consumesBeforeBed = ref(null);
    
    const goBack = () => {
      router.go(-1);
    };
    
    const selectSleepEnvironment = (environment) => {
      sleepEnvironment.value = environment;
    };
    
    const selectConsumesBeforeBed = (value) => {
      consumesBeforeBed.value = value;
    };
    
    const goToNext = () => {
      // In a real app, you might want to validate answers before proceeding
      // Save data to store or API
      router.push("/sleep-results");
    };
    
    return {
      currentStep,
      totalSteps,
      sleepEnvironment,
      consumesBeforeBed,
      goBack,
      selectSleepEnvironment,
      selectConsumesBeforeBed,
      goToNext
    };
  },
};
</script>

<template>
  <div class="questionnaire-container">
    <div class="header">
      <button class="back-button" @click="goBack">
        <ChevronLeft size="24" />
      </button>
      <div class="title-container">
        <h1 class="title">QUESTIONNAIRE</h1>
        <p class="subtitle">Sleep Environment</p>
      </div>
      <div class="placeholder"></div>
    </div>

    <div class="content">
      <div class="question-section">
        <h2 class="question">How would you describe your sleep environment?</h2>
        
        <div class="options">
          <button 
            class="option-button" 
            :class="{ 'selected': sleepEnvironment === 'quiet-dark' }"
            @click="selectSleepEnvironment('quiet-dark')"
          >
            Quiet and dark
          </button>
          
          <button 
            class="option-button" 
            :class="{ 'selected': sleepEnvironment === 'noisy' }"
            @click="selectSleepEnvironment('noisy')"
          >
            Noisy
          </button>
          
          <button 
            class="option-button" 
            :class="{ 'selected': sleepEnvironment === 'too-bright' }"
            @click="selectSleepEnvironment('too-bright')"
          >
            Too bright
          </button>
          
          <button 
            class="option-button" 
            :class="{ 'selected': sleepEnvironment === 'other' }"
            @click="selectSleepEnvironment('other')"
          >
            Other
          </button>
        </div>
      </div>
      
      <div class="question-section">
        <h2 class="question">Do you consume caffeine or alcohol before bed?</h2>
        
        <div class="options yes-no">
          <button 
            class="option-button yes" 
            :class="{ 'selected': consumesBeforeBed === true }"
            @click="selectConsumesBeforeBed(true)"
          >
            Yes (Caffeine, Alcohol, Both)
          </button>
          
          <button 
            class="option-button no" 
            :class="{ 'selected': consumesBeforeBed === false }"
            @click="selectConsumesBeforeBed(false)"
          >
            No
          </button>
        </div>
      </div>
      
      <div class="pagination">
        <div class="indicators">
          <div class="indicator active"></div>
          <div class="indicator active"></div>
          <div class="indicator"></div>
        </div>
        
        <button class="next-button" @click="goToNext">
          NEXT
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.questionnaire-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.back-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
}

.title-container {
  text-align: center;
}

.title {
  font-size: 18px;
  font-weight: 800;
  margin: 0;
  color: #000;
}

.subtitle {
  font-size: 14px;
  color: #000000;
  margin: 4px 0 0 0;
}

.placeholder {
  width: 40px;
}

.content {
  flex: 1;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
}

.question-section {
  margin-bottom: 32px;
}

.question {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 16px 0;
  line-height: 1.4;
  color: #000;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.yes-no {
  flex-direction: row;
  gap: 16px;
  justify-content: center;
}

.option-button {
  padding: 12px 16px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  background-color: #e0e0e0;
  color: #000;
  transition: background-color 0.2s, color 0.2s;
  width: auto;
  align-self: flex-start;
}

.yes, .no {
  flex: 1;
  max-width: 220px;
  text-align: center;
}

.option-button.selected {
  background-color: #ffb800;
  color: #000;
}

.pagination {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 120px;
}

.indicators {
  display: flex;
  gap: 8px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #e0e0e0;
}

.indicator.active {
  background-color: #ffb800;
}

.next-button {
  background-color: #ffb800;
  color: #000;
  border: none;
  border-radius: 50px;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
}
</style>