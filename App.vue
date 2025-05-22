<template>
  <div class="iphone-frame">
    <div class="notch"></div>
    <div class="screen">
      <div class="status-bar">
        <span>14:21</span>
        <span>
          <i class="signal">📶</i>
          <i class="wifi">📶</i>
          <i class="battery">🔋</i>
        </span>
      </div>
      
      <div class="app-content">
        <!-- 核心功能区 -->
        <div class="main-section">
          <h1 class="app-title">清理大师</h1>
          <div class="pulse-container">
            <div class="pulse"></div>
            <div class="pulse"></div>
            <div class="pulse"></div>
            <img src="https://img.icons8.com/color/96/waste--v1.png" class="big-icon" alt="垃圾桶">
          </div>
          <p class="alert-text">发现大量隐藏垃圾</p>
          <button class="main-cta" @click="startScan">快速扫描</button>
        </div>
        
        <!-- 快捷功能区 -->
        <div class="quick-actions">
          <div class="quick-action-card" @click="accelerate">
            <img src="https://img.icons8.com/ios-filled/48/rocket.png" class="quick-action-icon" alt="加速">
            <div class="quick-action-text">
              <div class="quick-action-title">手机加速</div>
              <div class="quick-action-desc">释放内存空间</div>
            </div>
          </div>
          <div class="quick-action-card" @click="analyzeMemory">
            <img src="https://img.icons8.com/ios-filled/48/processor.png" class="quick-action-icon" alt="内存">
            <div class="quick-action-text">
              <div class="quick-action-title">内存分析</div>
              <div class="quick-action-desc">查找内存占用</div>
            </div>
          </div>
        </div>
        
        <!-- 专项清理区 -->
        <div class="px-4">
          <h2 class="section-title">专项清理</h2>
        </div>
        <div class="special-cleanup">
          <div class="special-cleanup-grid">
            <div class="special-cleanup-item" @click="uninstallApps">
              <img src="https://img.icons8.com/ios-filled/48/trash.png" class="special-cleanup-icon" alt="应用卸载">
              <div class="special-cleanup-text">
                <div class="special-cleanup-title">应用卸载</div>
                <div class="special-cleanup-desc">一键清理应用</div>
              </div>
            </div>
            <div class="special-cleanup-item" @click="cleanImages">
              <img src="https://img.icons8.com/ios-filled/48/picture.png" class="special-cleanup-icon" alt="图片清理">
              <div class="special-cleanup-text">
                <div class="special-cleanup-title">图片清理</div>
                <div class="special-cleanup-desc">快速清理图片</div>
              </div>
            </div>
            <div class="special-cleanup-item" @click="cleanVideos">
              <img src="https://img.icons8.com/ios-filled/48/video.png" class="special-cleanup-icon" alt="视频清理">
              <div class="special-cleanup-text">
                <div class="special-cleanup-title">视频清理</div>
                <div class="special-cleanup-desc">释放视频空间</div>
              </div>
            </div>
            <div class="special-cleanup-item" @click="cleanNotifications">
              <img src="https://img.icons8.com/ios-filled/48/appointment-reminders.png" class="special-cleanup-icon" alt="通知清理">
              <div class="special-cleanup-text">
                <div class="special-cleanup-title">通知清理</div>
                <div class="special-cleanup-desc">整理系统通知</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 其他工具区 -->
        <div class="other-tools">
          <h2 class="section-title">其他工具</h2>
          <div class="card">
            <div class="tool-item" @click="fullSearch">
              <div class="tool-item-content">
                <img src="https://img.icons8.com/ios-filled/48/search.png" class="icon" alt="全盘搜索">
                <div>
                  <h3 class="font-bold text-gray-800">全盘搜索</h3>
                  <p class="text-sm text-gray-500">快速查找文件</p>
                </div>
              </div>
              <button class="action-btn" @click.stop="fullSearch">立即搜索</button>
            </div>
            <div class="tool-item" @click="cleanLargeFiles">
              <div class="tool-item-content">
                <img src="https://img.icons8.com/ios-filled/48/database.png" class="icon" alt="大文件专清">
                <div>
                  <h3 class="font-bold text-gray-800">大文件专清</h3>
                  <p class="text-sm text-gray-500">发现大型文件</p>
                </div>
              </div>
              <button class="action-btn" @click.stop="cleanLargeFiles">立即清理</button>
            </div>
            <div class="tool-item" @click="testWifi">
              <div class="tool-item-content">
                <img src="https://img.icons8.com/ios-filled/48/wifi--v1.png" class="icon" alt="WiFi测速">
                <div>
                  <h3 class="font-bold text-gray-800">WiFi测速</h3>
                  <p class="text-sm text-gray-500">检测网络速度</p>
                </div>
              </div>
              <button class="action-btn" @click.stop="testWifi">立即测速</button>
            </div>
            <div class="tool-item" @click="checkWifiUsers">
              <div class="tool-item-content">
                <img src="https://img.icons8.com/ios-filled/48/wi-fi-connected.png" class="icon" alt="蹭网检测">
                <div>
                  <h3 class="font-bold text-gray-800">蹭网检测</h3>
                  <p class="text-sm text-gray-500">查找陌生设备</p>
                </div>
              </div>
              <button class="action-btn" @click.stop="checkWifiUsers">立即检测</button>
            </div>
            <div class="tool-item" @click="controlTraffic">
              <div class="tool-item-content">
                <img src="https://img.icons8.com/ios-filled/48/network.png" class="icon" alt="流量控制">
                <div>
                  <h3 class="font-bold text-gray-800">流量控制</h3>
                  <p class="text-sm text-gray-500">节省流量使用</p>
                </div>
              </div>
              <button class="action-btn" @click.stop="controlTraffic">优化流量</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="home-indicator"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 响应式状态
const scanning = ref(false);

// 方法
const startScan = () => {
  scanning.value = true;
  // 这里可以添加扫描动画和逻辑
  setTimeout(() => {
    scanning.value = false;
    alert('扫描完成！发现238MB可清理垃圾');
  }, 2000);
};

const accelerate = () => {
  alert('正在加速手机...');
};

const analyzeMemory = () => {
  alert('正在分析内存...');
};

const uninstallApps = () => {
  alert('应用卸载功能');
};

const cleanImages = () => {
  alert('图片清理功能');
};

const cleanVideos = () => {
  alert('视频清理功能');
};

const cleanNotifications = () => {
  alert('通知清理功能');
};

const fullSearch = () => {
  alert('全盘搜索功能');
};

const cleanLargeFiles = () => {
  alert('大文件专清功能');
};

const testWifi = () => {
  alert('WiFi测速功能');
};

const checkWifiUsers = () => {
  alert('蹭网检测功能');
};

const controlTraffic = () => {
  alert('流量控制功能');
};
</script>

<style scoped>
body {
  background-color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
}

/* iPhone 15 Pro Max 样式 */
.iphone-frame {
  position: relative;
  width: 430px;
  height: 932px;
  background-color: #1a1a1a;
  border-radius: 55px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 15px;
  overflow: hidden;
}

/* 刘海区域 */
.notch {
  position: absolute;
  width: 160px;
  height: 34px;
  background-color: #1a1a1a;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 20px 20px;
  z-index: 10;
}

/* 屏幕 */
.screen {
  background-color: #EAF1F7;
  height: 100%;
  width: 100%;
  border-radius: 45px;
  overflow: hidden;
  position: relative;
}

/* 状态栏 */
.status-bar {
  height: 47px;
  background-color: #FFA85C;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 0 20px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}

/* 底部指示条 */
.home-indicator {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 5px;
  background-color: #000;
  border-radius: 3px;
  opacity: 0.3;
}

/* 主要内容样式 */
.app-content {
  height: calc(100% - 47px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

/* 定制样式 */
.main-section {
  background: linear-gradient(to bottom, #FFA85C 70%, rgba(255, 168, 92, 0.7) 90%, rgba(255, 168, 92, 0) 100%);
  height: 32%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-bottom: 35px;
  padding-top: 2px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.app-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.main-cta {
  background-color: #FFFFFF;
  color: #FFA85C;
  padding: 12px 40px;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 5px;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 5;
}

.main-cta:active {
  transform: scale(0.98);
  background-color: #F8F9FB;
}

.quick-actions {
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  position: relative;
  z-index: 10;
  margin-top: 0px;
}

.special-cleanup {
  padding: 15px;
}

.special-cleanup-grid {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;
}

.special-cleanup-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 12px;
  text-align: left;
  border-right: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  transition: background-color 0.2s;
}

.special-cleanup-item:nth-child(2n) {
  border-right: none;
}

.special-cleanup-item:nth-child(3), .special-cleanup-item:nth-child(4) {
  border-bottom: none;
}

.special-cleanup-item:active {
  background-color: #f5f5f5;
}

.special-cleanup-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  margin-right: 8px;
  flex-shrink: 0;
  filter: invert(58%) sepia(81%) saturate(415%) hue-rotate(84deg) brightness(94%) contrast(92%);
}

.special-cleanup-text {
  display: flex;
  flex-direction: column;
}

.special-cleanup-title {
  font-size: 15px;
  font-weight: 700;
  color: #333;
  margin-bottom: 2px;
}

.special-cleanup-desc {
  font-size: 13px;
  color: #777;
}

.other-tools {
  padding: 15px;
}

.card {
  background-color: white;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.card:active {
  transform: translateY(2px);
}

.tool-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f1f1f1;
  justify-content: space-between;
}

.tool-item-content {
  display: flex;
  align-items: center;
}

.action-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(76, 175, 80, 0.2);
}

.action-btn:active {
  transform: scale(0.95);
  background-color: #3d8b40;
  box-shadow: 0 1px 2px rgba(76, 175, 80, 0.2);
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #333;
}

.icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 15px;
  filter: invert(63%) sepia(14%) saturate(1699%) hue-rotate(348deg) brightness(101%) contrast(101%);
}

.big-icon {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
}

.alert-text {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-top: -8px;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* 径向渐变动画 */
.pulse-container {
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}

.pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 70%);
  opacity: 0;
  animation: pulse 1.8s infinite;
}

.pulse:nth-child(2) {
  animation-delay: 0.4s;
}

.pulse:nth-child(3) {
  animation-delay: 0.8s;
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0.95;
  }
  100% {
    transform: scale(1.9);
    opacity: 0;
  }
}

.quick-action-card {
  background-color: white;
  border-radius: 15px;
  padding: 18px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.quick-action-card:active {
  transform: translateY(2px);
}

.quick-action-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 12px;
  flex-shrink: 0;
  filter: invert(46%) sepia(60%) saturate(2103%) hue-rotate(190deg) brightness(95%) contrast(95%);
}

.quick-action-text {
  display: flex;
  flex-direction: column;
}

.quick-action-title {
  font-size: 15px;
  font-weight: 700;
  color: #333;
  margin-bottom: 3px;
}

.quick-action-desc {
  font-size: 13px;
  color: #777;
}
</style> 