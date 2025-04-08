<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ChevronLeft, User, Phone, Calendar, Home, Crown, Shield, Heart, MessageSquare } from "lucide-vue-next";

export default {
  name: "ProfileScreen",
  components: { 
    ChevronLeft, 
    User, 
    Phone, 
    Calendar, 
    Home, 
    Crown, 
    Shield, 
    Heart, 
    MessageSquare 
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    
    const userData = ref({
      name: "Darrell Steward",
      phone: "(316) 555-0116",
      dateJoined: "5/27/15",
      address: "3891 Ranchview Dr. Richardson, California 62639"
    });
    
    const goBack = () => {
      router.go(-1);
    };
    
    const editProfile = () => {
      router.push("/edit-profile");
    };
    
    const navigateTo = (route) => {
      router.push(route);
    };
    
    return {
      userData,
      goBack,
      editProfile,
      navigateTo
    };
  },
};
</script>
<template>
  <div class="profile-container">
    <div class="header">
      <h1 class="title">Profile</h1>
      <div class="avatar">
        <img src="https://via.placeholder.com/40" alt="Profile avatar" />
      </div>
    </div>
    <div class="content">
      <div class="profile-section">
        <div class="profile-item">
          <div class="icon"><User size="20" /></div>
          <div class="profile-text">{{ userData.name }}</div>
          <button class="edit-button" @click="editProfile">Edit &gt;</button>
        </div>
        <div class="divider"></div>
        
        <div class="profile-item">
          <div class="icon"><Phone size="20" /></div>
          <div class="profile-text">{{ userData.phone }}</div>
        </div>
        <div class="divider"></div>
        
        <div class="profile-item">
          <div class="icon"><Calendar size="20" /></div>
          <div class="profile-text">{{ userData.dateJoined }}</div>
        </div>
        <div class="divider"></div>
        
        <div class="profile-item">
          <div class="icon"><Home size="20" /></div>
          <div class="profile-text">{{ userData.address }}</div>
        </div>
      </div>
      
      <h2 class="settings-header">Settings</h2>
      
      <div class="settings-section">
        <div class="settings-item" @click="navigateTo('/premium')">
          <div class="icon premium"><Crown size="20" /></div>
          <div class="settings-text">Get Premium</div>
          <div class="more-button">More &gt;</div>
        </div>
        <div class="divider"></div>
        
        <div class="settings-item" @click="navigateTo('/privacy-policy')">
          <div class="icon policy"><Shield size="20" /></div>
          <div class="settings-text">Private policy</div>
          <div class="more-button">More &gt;</div>
        </div>
        <div class="divider"></div>
        
        <div class="settings-item" @click="navigateTo('/rate')">
          <div class="icon rate"><Heart size="20" /></div>
          <div class="settings-text">Rate us</div>
          <div class="more-button">More &gt;</div>
        </div>
        <div class="divider"></div>
        
        <div class="settings-item" @click="navigateTo('/feedback')">
          <div class="icon feedback"><MessageSquare size="20" /></div>
          <div class="settings-text">Send Feedback</div>
          <div class="more-button">More &gt;</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.profile-container {
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #000000;
}
.title {
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: #000000;
}
.avatar {
  width: 110px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  flex-grow: 1;
  margin-top: 60px;
}
.profile-section, .settings-section {
  margin-bottom: 24px;
  width: 100%;
}
.settings-header {
    display: flex;
  font-size: 22px;
  font-weight: 600;
  margin: 16px 0;
  color: #000000;
}
.profile-item, .settings-item {
  display: flex;
  align-items: center;
  padding: 16px 0;
}
.icon {
  margin-right: 16px;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #000000;
}
.profile-text, .settings-text {
  flex-grow: 0;
  font-size: 16px;
  color: #000000;
  padding: -40px;
  align-items: left;
}
.edit-button {
    align-items: right;
  background: none;
  border: none;
  color: #888;
  font-size: 16px;
  cursor: pointer;
}
.more-button {
  color: #888;
  font-size: 16px;
}
.divider {
  height: 1px;
  background-color: #e0e0e0;
  width: 100%;
}
.premium {
  color: #f0c14b;
}
.policy {
  color: #50b7f5;
}
.rate {
  color: #ff6b6b;
}
.feedback {
  color: #6a75ca;
}
.settings-item {
  cursor: pointer;
}
.settings-item:active {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>