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
    const sleepHours = ref(null);
    const sleepIssues = ref([]);
    const trackingSleep = ref(null);
    
    const goBack = () => {
      router.go(-1);
    };
    
    const selectSleepHours = (hours) => {
      sleepHours.value = hours;
    };
    
    const toggleSleepIssue = (issue) => {
      if (sleepIssues.value.includes(issue)) {
        sleepIssues.value = sleepIssues.value.filter(item => item !== issue);
      } else {
        sleepIssues.value.push(issue);
      }
    };
    
    const selectTrackingSleep = (value) => {
      trackingSleep.value = value;
    };
    
    const goToNext = () => {
      // In a real app, you might want to validate answers before proceeding
      // Save data to store or API
      router.push("/results");
    };
    
    return {
      currentStep,
      totalSteps,
      sleepHours,
      sleepIssues,
      trackingSleep,
      goBack,
      selectSleepHours,
      toggleSleepIssue,
      selectTrackingSleep,
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
        <p class="subtitle">Sleep Patterns</p>
      </div>
      <div class="placeholder"></div>
    </div>

    <div class="content">
      <div class="question-section">
        <h2 class="question">How many hours of sleep do you typically get per night?</h2>
        
        <div class="options">
          <button 
          class="option-button sleep-hours-option" 
            :class="{ 'selected': sleepHours === 'less-than-4' }"
            @click="selectSleepHours('less-than-4')"
          >
            Less than 4 hours
          </button>
          
          <button 
            class="option-button" 
            :class="{ 'selected': sleepHours === '4-6' }"
            @click="selectSleepHours('4-6')"
          >
            4-6 hours
          </button>
          
          <button 
            class="option-button" 
            :class="{ 'selected': sleepHours === '6-8' }"
            @click="selectSleepHours('6-8')"
          >
            6-8 hours
          </button>
          
          <button 
          class="option-button sleep-hours-option" 
            :class="{ 'selected': sleepHours === 'more-than-8' }"
            @click="selectSleepHours('more-than-8')"
          >
            More than 8 hours
          </button>
        </div>
      </div>
      
      <div class="question-section">
        <h2 class="question">Do you currently experience any of the following?</h2>
        
        <div class="options">
            
          <button 
            class="option-button sleep-hours-option" 
            :class="{ 'selected': sleepIssues.includes('falling-asleep') }"
            @click="toggleSleepIssue('falling-asleep')"
          >
            Trouble falling asleep
          </button>
          
          <button 
          class="option-button feeling-tired-option" 
            :class="{ 'selected': sleepIssues.includes('waking-up') }"
            @click="toggleSleepIssue('waking-up')"
          >
            Waking up frequently at night
          </button>
          
          <button 
          class="option-button waking-up-option" 
            :class="{ 'selected': sleepIssues.includes('feeling-tired') }"
            @click="toggleSleepIssue('feeling-tired')"
          >
            Feeling tired after a full night's sleep
          </button>
          
          <button 
          class="option-button" 
            :class="{ 'selected': sleepIssues.includes('none') }"
            @click="toggleSleepIssue('none')"
          >
            None of the above
          </button>
        </div>
      </div>
      
      <div class="question-section">
        <h2 class="question">Do you use any devices or methods to track your sleep?</h2>
        
        <div class="options yes-no">
          <button 
            class="option-button yes" 
            :class="{ 'selected': trackingSleep === true }"
            @click="selectTrackingSleep(true)"
          >
            Yes
          </button>
          
          <button 
            class="option-button no" 
            :class="{ 'selected': trackingSleep === false }"
            @click="selectTrackingSleep(false)"
          >
            No
          </button>
        </div>
      </div>
      
      <div class="pagination">
        <div class="indicators">
          <div class="indicator active"></div>
          <div class="indicator"></div>
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
  font-size: 20px;
  font-weight: 300;
  color: #000;
  margin-top: 40px;
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
  margin-left: 8px;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.yes-no {
  flex-direction: row;
  gap: 16px;
  align-content: center;
  justify-content: center;
}

.option-button {
  padding: 16px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  background-color: #e0e0e0;
  color: #000;
  transition: background-color 0.2s, color 0.2s;
  width: 200px;
}
/* For sleep hours options */
.sleep-hours-option {
  width: 250px;
}

/* For sleep issues options */
.sleep-issues-option {
  width: 300px;
}
.waking-up-option {
    padding: 16px;
    width: 350px;
}
.feeling-tired-option {
    width: 320px;
}

.option-button.selected {
  background-color: #ffc107;
  color: #000;
}

.yes, .no {
  flex: 1;
  max-width: 140px;
  align-content: center;
  justify-content: center;
}

.pagination {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  margin-left: 12px;
}

.indicators {
  display: flex;
  gap: 8px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #e0e0e0;
}

.indicator.active {
  background-color: #ffc107;
}

.next-button {
  background-color: #ffc107;
  color: #000;
  border: none;
  border-radius: 50px;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 12px;
}
</style>