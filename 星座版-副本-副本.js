

    // 星座数据
    const zodiacData = [
        { name: "白羊座", date: "3.21-4.19", symbol: "♈", fortune: "白羊座为你送上祝福：愿你的热情如烈火般永不熄灭，勇气照亮前路！" },
        { name: "金牛座", date: "4.20-5.20", symbol: "♉", fortune: "金牛座为你祈愿：愿你的坚持如大地般稳固，收获丰硕果实！" },
        { name: "双子座", date: "5.21-6.21", symbol: "♊", fortune: "双子座为你歌唱：愿你的生活充满欢声笑语，智慧如星光闪烁！" },
        { name: "巨蟹座", date: "6.22-7.22", symbol: "♋", fortune: "巨蟹座为你祝福：愿你的家庭温暖如春，情感如月光般温柔！" },
        { name: "狮子座", date: "7.23-8.22", symbol: "♌", fortune: "狮子座为你呐喊：愿你的光芒如太阳般耀眼，自信照亮人生！" },
        { name: "处女座", date: "8.23-9.22", symbol: "♍", fortune: "处女座为你祈祷：愿你的生活精致完美，细节中见真章！" },
        { name: "天秤座", date: "9.23-10.23", symbol: "♎", fortune: "天秤座为你祈愿：愿你的人生永远平衡美好，公正如星辰运转！" },
        { name: "天蝎座", date: "10.24-11.21", symbol: "♏", fortune: "天蝎座为你送上祝福：愿你的洞察力如深渊般深邃，神秘而强大！" },
        { name: "射手座", date: "11.22-12.21", symbol: "♐", fortune: "射手座为你欢呼：愿你的旅途充满惊喜，自由如风般翱翔！" },
        { name: "摩羯座", date: "12.22-1.19", symbol: "♑", fortune: "摩羯座为你承诺：愿你的努力如山峰般坚定，终将触摸星空！" },
        { name: "水瓶座", date: "1.20-2.18", symbol: "♒", fortune: "水瓶座为你祈愿：愿你的创意如清泉涌流，思想如宇宙般广阔！" },
        { name: "双鱼座", date: "2.19-3.20", symbol: "♓", fortune: "双鱼座为你祝福：愿你的梦想如海洋般浩瀚，情感如诗歌般美丽！" }
    ];

    // 创建星星
    function createStars() {
        const starsContainer = document.getElementById('stars');
        const count = 300;
        
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            star.style.width = Math.random() * 3 + 1 + 'px';
            star.style.height = star.style.width;
            star.style.opacity = Math.random() * 0.5 + 0.1;
            star.style.setProperty('--duration', Math.random() * 5 + 3 + 's');
            starsContainer.appendChild(star);
        }
    }
    
    // 创建星座
    function createConstellation() {
        const constellationContainer = document.getElementById('constellation');
        const dotCount = 12;
        const dots = [];
        
        // 创建星座点
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'constellation-dot';
            dot.style.left = Math.random() * 80 + 10 + 'vw';
            dot.style.top = Math.random() * 60 + 20 + 'vh';
            dot.style.animationDelay = Math.random() * 2 + 's';
            constellationContainer.appendChild(dot);
            dots.push(dot);
        }
        
        // 创建星座连线
        for (let i = 0; i < dotCount - 1; i++) {
            for (let j = i + 1; j < Math.min(i + 3, dotCount); j++) {
                if (Math.random() > 0.3) {
                    const line = document.createElement('div');
                    line.className = 'constellation-line';
                    
                    const dot1 = dots[i];
                    const dot2 = dots[j];
                    
                    const rect1 = dot1.getBoundingClientRect();
                    const rect2 = dot2.getBoundingClientRect();
                    
                    const x1 = rect1.left + rect1.width / 2;
                    const y1 = rect1.top + rect1.height / 2;
                    const x2 = rect2.left + rect2.width / 2;
                    const y2 = rect2.top + rect2.height / 2;
                    
                    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                    
                    line.style.width = length + 'px';
                    line.style.left = x1 + 'px';
                    line.style.top = y1 + 'px';
                    line.style.transform = `rotate(${angle}deg)`;
                    
                    constellationContainer.appendChild(line);
                }
            }
        }
    }
    
    // 创建流星
    function createMeteor() {
        const meteor = document.createElement('div');
        meteor.className = 'shooting-star';
        meteor.style.left = Math.random() * 100 + 'vw';
        meteor.style.top = Math.random() * 30 + 'vh';
        meteor.style.animation = `shooting ${Math.random() * 2 + 1}s linear forwards`;
        document.getElementById('meteor-shower').appendChild(meteor);
        
        setTimeout(() => {
            meteor.remove();
        }, 2000);
    }
    
    // 创建流星雨
    function createMeteorShower(count = 10, delay = 200) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                createMeteor();
            }, i * delay);
        }
    }
    
    // 创建庆祝效果
    function createCelebrationEffect(text) {
        const effect = document.createElement('div');
        effect.className = 'celebration-effect';
        effect.textContent = text;
        document.body.appendChild(effect);
        
        setTimeout(() => {
            effect.remove();
        }, 3000);
    }
    
    // 切换场景
    function switchScene(from, to) {
        from.classList.add('hidden');
        setTimeout(() => {
            to.classList.remove('hidden');
            if (to.id === 'wish-scene') {
                to.classList.add('visible');
            }
        }, 500);
    }
    
    // 初始化3D星空
    function init3DStars() {
        const container = document.getElementById('three-container');
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        // 创建场景
        const scene = new THREE.Scene();
        
        // 创建相机
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;
        
        // 创建渲染器
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);
        
        // 创建星星
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1,
            transparent: true,
            opacity: 0.8
        });
        
        const starsVertices = [];
        for (let i = 0; i < 1000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starsVertices.push(x, y, z);
        }
        
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);
        
        // 动画循环
        function animate() {
            requestAnimationFrame(animate);
            stars.rotation.x += 0.0001;
            stars.rotation.y += 0.0001;
            renderer.render(scene, camera);
        }
        
        animate();
        
        // 窗口大小调整
        window.addEventListener('resize', () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        });
    }
    
    // 初始化星座选择
    function initZodiacSelect() {
        const zodiacSelect = document.getElementById('zodiac-select');
        
        zodiacData.forEach((zodiac, index) => {
            const option = document.createElement('div');
            option.className = 'zodiac-option';
            option.dataset.index = index;
            option.innerHTML = `
                <div>${zodiac.symbol}</div>
                <span>${zodiac.name}</span>
                <span>${zodiac.date}</span>
            `;
            
            option.addEventListener('click', function() {
                document.querySelectorAll('.zodiac-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                this.classList.add('selected');
            });
            
            zodiacSelect.appendChild(option);
        });
    }
    
    // 初始化倒计时
    function initCountdown(birthdayDate) {
        const now = new Date();
        const currentYear = now.getFullYear();
        let nextBirthday = new Date(birthdayDate);
        nextBirthday.setFullYear(currentYear);
        
        // 如果生日已经过了今年，设置为明年
        if (nextBirthday < now) {
            nextBirthday.setFullYear(currentYear + 1);
        }
        
        const countdownDisplay = document.getElementById('countdown-display');
        
        function updateCountdown() {
            const now = new Date();
            const diff = nextBirthday - now;
            
            if (diff <= 0) {
                countdownDisplay.innerHTML = '<div class="message">今天是你的生日！生日快乐！</div>';
                return;
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            countdownDisplay.innerHTML = `
                <div class="message">距离生日还有：</div>
                <div class="countdown">
                    <div class="countdown-item">
                        <div class="countdown-number">${days}</div>
                        <div class="countdown-label">天</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number">${hours}</div>
                        <div class="countdown-label">小时</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number">${minutes}</div>
                        <div class="countdown-label">分钟</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number">${seconds}</div>
                        <div class="countdown-label">秒</div>
                    </div>
                </div>
            `;
        }
        
        updateCountdown();
        countdownDisplay.classList.remove('hidden');
        setInterval(updateCountdown, 1000);
    }
    
    // 初始化游戏
    function initGame() {
        const gameBoard = document.getElementById('game-board');
        const gameArea = document.getElementById('game-area');
        const closeGame = document.getElementById('close-game');
        const newGameBtn = document.getElementById('new-game');
        // const playGameBtn = document.getElementById('play-game-btn');
        
        let stars = [];
        let lines = [];
        let selectedStars = [];
        
        // 创建新游戏
        function createNewGame() {
            // 清空游戏板
            gameBoard.innerHTML = '';
            stars = [];
            lines = [];
            selectedStars = [];
            
            // 创建星星
            for (let i = 0; i < 10; i++) {
                const star = document.createElement('div');
                star.className = 'game-star';
                star.dataset.index = i;
                
                // 随机位置，确保不会太靠近边缘
                const x = Math.random() * 80 + 10;
                const y = Math.random() * 80 + 10;
                
                star.style.left = `${x}%`;
                star.style.top = `${y}%`;
                
                star.addEventListener('click', handleStarClick);
                
                gameBoard.appendChild(star);
                stars.push({
                    element: star,
                    x: x,
                    y: y
                });
            }
        }
        
        // 处理星星点击
        function handleStarClick(e) {
            const index = parseInt(e.target.dataset.index);
            
            // 如果已经选中，取消选中
            const selectedIndex = selectedStars.indexOf(index);
            if (selectedIndex !== -1) {
                selectedStars.splice(selectedIndex, 1);
                e.target.style.background = '#fff';
                
                // 移除相关的线
                lines = lines.filter(line => {
                    const keep = !(line.from === index || line.to === index);
                    if (!keep) {
                        line.element.remove();
                    }
                    return keep;
                });
                
                return;
            }
            
            // 选中星星
            selectedStars.push(index);
            e.target.style.background = 'var(--primary-color)';
            
            // 如果选中了至少2颗星星，画线
            if (selectedStars.length >= 2) {
                const fromIndex = selectedStars[selectedStars.length - 2];
                const toIndex = selectedStars[selectedStars.length - 1];
                
                drawLine(fromIndex, toIndex);
            }
            
            // 如果选中了3颗或更多星星，检查是否形成闭合图形
            if (selectedStars.length >= 3) {
                // 检查最后三个点是否形成闭合图形
                const lastThree = selectedStars.slice(-3);
                if (lastThree[0] === lastThree[2]) {
                    createCelebrationEffect('✨');
                }
            }
        }
        
        // 画线
        function drawLine(fromIndex, toIndex) {
            const fromStar = stars[fromIndex];
            const toStar = stars[toIndex];
            
            const line = document.createElement('div');
            line.className = 'game-line';
            
            const fromX = fromStar.x * gameBoard.clientWidth / 100;
            const fromY = fromStar.y * gameBoard.clientHeight / 100;
            const toX = toStar.x * gameBoard.clientWidth / 100;
            const toY = toStar.y * gameBoard.clientHeight / 100;
            
            const length = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
            const angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
            
            line.style.width = `${length}px`;
            line.style.left = `${fromX}px`;
            line.style.top = `${fromY}px`;
            line.style.transform = `rotate(${angle}deg)`;
            
            gameBoard.appendChild(line);
            
            lines.push({
                element: line,
                from: fromIndex,
                to: toIndex
            });
        }
        
        // 打开游戏
        // playGameBtn.addEventListener('click', function() {
        //     gameArea.classList.add('active');
        //     createNewGame();
        // });
        
        // 关闭游戏
        closeGame.addEventListener('click', function() {
            gameArea.classList.remove('active');
        });
        
        // 新游戏
        newGameBtn.addEventListener('click', createNewGame);
    }
    
    // 初始化
    window.onload = function() {
        createStars();
        createConstellation();
        init3DStars();
        initZodiacSelect();
        initGame();
        
        // 初始流星
        createMeteorShower(3, 1000);
        
        // 持续生成流星
        setInterval(() => {
            if (Math.random() > 0.7) {
                createMeteor();
            }
        }, 3000);
        
        // 名字提交
        document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('name-submit').addEventListener('click', function() {
            const name = document.getElementById('name-input').value.trim();
            const selectedZodiac = document.querySelector('.zodiac-option.selected');
            const birthdayDate = document.getElementById('birthday-date').value;
            

            if (!name) {
                alert('请输入寿星的名字哦！');
                return;
            }
            
            if (!selectedZodiac) {
                alert('请选择寿星的星座！');
                return;
            }
            
            if (!birthdayDate) {
                alert('请选择生日日期！');
                return;
            }
            
 
            // 更新主场景内容
            document.getElementById('birthday-title').textContent = `${name}，生日快乐`;
            document.getElementById('display-name').textContent = name;
            document.getElementById('birthday-message').innerHTML = `
                ${name}，在这璀璨星空下，<br>
                愿你的梦想如星辰般闪耀！
            `;
            
            // 显示星座信息
            const zodiacIndex = selectedZodiac.dataset.index;
            const zodiac = zodiacData[zodiacIndex];
            document.getElementById('zodiac-name').textContent = zodiac.name;
            document.getElementById('zodiac-fortune').textContent = zodiac.fortune;
            document.getElementById('zodiac-info').classList.remove('hidden');
            
            // 初始化倒计时
            initCountdown(birthdayDate);
            
            // 切换场景
            switchScene(
                document.getElementById('name-scene'),
                document.getElementById('main-scene')
            );
            
            // 庆祝效果
            createCelebrationEffect('✨');
            createMeteorShower(5, 300);
        });});
        
        // 愿望提交
        document.getElementById('wish-submit').addEventListener('click', makeAWish);
        document.getElementById('wish-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                makeAWish();
            }
        });
        
        // 返回按钮
        document.getElementById('back-button').addEventListener('click', function() {
            document.getElementById('wish-scene').classList.remove('visible');
            setTimeout(() => {
                document.getElementById('wish-input').value = '';
                document.getElementById('wish-input').focus();
            }, 500);
        });
        
        // 鼠标跟随星星
        document.addEventListener('mousemove', function(e) {
            if (Math.random() > 0.9) {
                const spark = document.createElement('div');
                spark.className = 'star';
                spark.style.left = e.pageX + 'px';
                spark.style.top = e.pageY + 'px';
                spark.style.width = '2px';
                spark.style.height = '2px';
                spark.style.opacity = '0.8';
                spark.style.animation = 'twinkle 1s forwards';
                document.getElementById('stars').appendChild(spark);
                
                setTimeout(() => {
                    spark.remove();
                }, 1000);
            }
        });
    };
    
    // 许愿函数
    function makeAWish() {
        const wish = document.getElementById('wish-input').value.trim();
        if (wish) {
            // 更新愿望场景内容
            const name = document.getElementById('display-name').textContent;
            document.getElementById('wish-content').textContent = `"${wish}"`;
            document.getElementById('wish-name').textContent = name;
            
            // 切换场景
            switchScene(
                document.getElementById('main-scene'),
                document.getElementById('wish-scene')
            );
            
            // 特效
            createCelebrationEffect('🌠');
            createMeteorShower(15, 150);
            
            // 播放音效
            /*const audio = new Audio('配乐.mp3');
            audio.play().catch(e => console.log('音效播放失败'));*/
        } else {
            alert('请先输入你的愿望哦！');
        }

    }	
    let times=0;
    function showmusic(){
            if(times==0){
                times=times+1; 
                const audio = new Audio('配乐.mp3');
                audio.play();
                
             
            }
        }