// class Person {
//  constructor(name,age) {
//     this.name = name 
//     this.age = age
//  }

//  greet() {
//     console.log(`Привет, меня зовут ${this.name}`)
//  }

//  static info() {
//     console.log("Я люблю котят")
//  }
// } 
// bob.greet()
// Person.info()

// const bob = new Person("new Irina", 14) 


// console.log(bob.age)

// class Color extends Person {
//     constructor(name, position) {
//         super(name)
//         this.position = position

//     }

//     greet() {
//         super.greet()
//     }
// }

// class Counter {
//     #count = 10;

//     increment() {
//         this.#count++
//     }
// }


// class Student {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }

//     setGrade(newGrade) {
//         this.grade = newGrade;
//     }

//     getInfo() {
//         return `Имя: ${this.name}, Возраст: ${this.age}, Класс: ${this.grade}`;
//     }
// }

// const student1 = new Student("Анна", 15, 9);

// console.log(student1.getInfo());

// student1.setGrade(10);

// console.log(student1.getInfo());


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Привет! Меня зовут ${this.name} и мне ${this.age} лет.`);
//     }
// }

// class Student extends Person {
//     // constructor(name, age, grade) {
//     //     super(name, age);
//     //     this.grade = grade;
//     // }

//     // study() {
//     //     console.log(`${this.name} учится в ${this.grade} классе.`);
//    // }

//     #count = 0

//     increment() {
//         this.#count++

//     }
// }

// const s = new Student("Игорь", 14, 8);
// s.greet(); 
// s.study();

// s.increment()
// s.increment()

// function color() {
//     console.log("Мир прекрасен")
// }

// color() 

// const colors = function() {
//     console.log("Мир прекрасен")
// }


// const sum = (a, b) => a + b;

// console.log(sum(3, 5)); 

const fruits = ['🍎', '🍌', '🍇'];

fruits.push(4)
console.log(fruits.push(4))
const last = fruits.pop()
console.log(fruits)

const names = ["Анна","Мария","Данил","Анастасия","Владимир"]

names.forEach((name,index) => {
    console.log(`${index+1}: ${name}`)
})

const nums = [1,2,3]
const d = nums.map(num => num * 2)
console.log(d)

const even = nums.filter(n => n % 2 === 0)
console.log(even)


const cart = [
  { item: 'Книга', price: 300 },
  { item: 'Ручка', price: 20 },
  { item: 'Ластик', price: 15 },
];
const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(total);


const people = [
  { name: 'Маша', age: 15 },
  { name: 'Петя', age: 19 },
  { name: 'Коля', age: 17 }
];
const adult = people.find(person => person.age > 18);
console.log(adult);


const passwords = ['qwerty123', 'admin123', 'superlongpassword!'];
const allValid = passwords.every(pw => pw.length >= 8);
console.log(allValid); 


const clients = [
  { name: 'Оля', vip: false },
  { name: 'Илья', vip: false },
  { name: 'Андрей', vip: true }
];
const hasVip = clients.some(client => client.vip === true);
console.log(hasVip); 


const words = ['hi', 'javascript', 'sun', 'elephant'];
const longest = words.reduce((a, b) => a.length >= b.length ? a : b);
console.log(longest); 


const chars = ['a', 'b', 'a', 'c', 'b', 'a'];
const frequency = chars.reduce((accumulator, current) => {
  accumulator[current] = (accumulator[current] || 0) + 1;
  return accumulator; 
}, {});
console.log(frequency);

const user = {
  name: "Милена",
  age: 23,
  say() {
    console.log("Добрый день")
  }
}

console.log(user.name)
console.log(user["age"])
user.age = 35
user.city = "UK"
delete user.city
user.say()

const post = {
  title: "Новость",
  author: {
    name: "Ира",
    age: 18
  },
  tags: ["js","web"]
}

console.log(post.author.name)
console.log(post.tags[1])

const car = {
  brand: "Tesla",
  year: 2022,
  isElectric: true,

}
console.log(car)
delete car.year
car.accumulator = true

const users = [
  { name: 'Алиса', age: 25 },
  { name: 'Павел', age: 17 },
  { name: 'Данил', age: 30 },
  { name: 'Мария', age: 15 },
  { name: 'Вероника', age: 22 }
];

const adults = users.filter(user => user.age > 18);
console.log(adults);


for(let i = 0; i < users.length; i++) {
  console.log(`имя: ${users[i].name}, возраст: ${users[i].age}`)
}

const title = document.querySelectorAll("#test")

const text = document.querySelector(".text")

const toggleBtn = document.getElementById('theme-toggle');
const THEME_KEY = 'theme';

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

function getPreferredTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme) {
    return storedTheme;
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function updateButton(theme) {
  const oldSpan = toggleBtn.querySelector('span');
  if (oldSpan) {
    oldSpan.classList.add('fade-out');
    oldSpan.addEventListener('transitionend', () => {
      toggleBtn.removeChild(oldSpan);
      addNewSpan(theme);
    }, { once: true });
  } else {
    addNewSpan(theme);
  }
}

function addNewSpan(theme) {
  const span = document.createElement('span');
  if (theme === 'dark') {
    span.textContent = '☀️'; 
  } else {
    span.textContent = '🌙'; 
  }
  // span.classList.add('fade-in');
  toggleBtn.appendChild(span);
}

// function toggleTheme() {
//   const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
//   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//   applyTheme(newTheme);
//   localStorage.setItem(THEME_KEY, newTheme);
//   updateButton(newTheme);
// }

function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
  updateButton(newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = getPreferredTheme();
  applyTheme(currentTheme);
  updateButton(currentTheme);

  toggleBtn.addEventListener('click', toggleTheme);
});

function createCounter() {
  let value = 0; // приватная переменная, доступна только внутри

  return {
    increment() {
      value++;
    },
    decrement() {
      value--;
    },
    getValue() {
      return value;
    },
    setValue(newValue) {
      if (typeof newValue === 'number') {
        value = newValue;
      } else {
        console.log('Неверное значение! Нужно число.');
      }
    }
  };
}

const counter = createCounter() 
counter.increment();
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());
counter.setValue(10);
console.log(counter.getValue());
counter.setValue('abc');
console.log(counter.getValue());
console.log(counter.value);

const calculator = {
  bonus: 10,
  sum(a, b) {
    return a + b + this.bonus;
  }
};

const newContext = { bonus: 100 };

console.log(calculator.sum.call(newContext, 2, 3));

const animal = {
  eats: true,
  walk() {
    console.log(`${this.name} walks`);
  }
};

const rabbit = Object.create(animal);
rabbit.name = "White Rabbit"; 

console.log(rabbit.eats); 
rabbit.walk(); 


class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} издает звук`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} лает!`);
  }
}

const dog = new Dog("Рекс");
dog.speak(); 

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    if(!response.ok) {
      throw new Error("ошибка в сети")
    }
    return response.json()
  })
  .catch(error => {
    console.error("Ошибка отправки")
  })

  async function load() {
   await fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    if(!response.ok) {
      throw new Error("ошибка в сети")
    }
    return response.json()
  })
  .catch(error => {
    console.error("Ошибка отправки")
  })
  }

   function createPostElement(post) {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <div class="post-meta">
                    <span>ID: ${post.id}</span>
                    <span>Автор: ${post.userId || 1}</span>
                </div>
            `;
            return postElement;
        }
         async function loadPosts() {
            const postsContainer = document.getElementById('posts-container');
            
     try {
    postsContainer.innerHTML = '';
    
     const additionalPosts = [
    { 
        id: 101, 
        title: 'Мой первый пост о котах', 
        body: 'Этот пост посвящен моим любимым котам. Здесь я буду делиться интересными фактами и наблюдениями о наших пушистых друзьях.',
        userId: 1 
    },
    { 
        id: 102, 
        title: 'О породах кошек', 
        body: 'Сегодня я изучал разные породы кошек. Оказывается, существует более 70 официально признанных пород! Каждая имеет свои уникальные особенности характера и внешности.',
        userId: 1 
    },
    { 
        id: 103, 
        title: 'Планы по уходу за котом', 
        body: '1. Купить новый корм премиум-класса\n2. Записаться на стрижку когтей\n3. Приобрести новую когтеточку',
        userId: 1 
    },        
    {    
        id: 104, 
        title: 'Советы новым владельцам котов', 
        body: 'Не переживайте, если ваш кот сначала кажется диковатым. Дайте ему время освоиться. Помните - кошки чувствуют ваше настроение и отношение!',
        userId: 1 
    },
    { 
        id: 105, 
        title: 'Полезные ресурсы о котах', 
        body: 'Catster, The Cat Fanciers\' Association, International Cat Care - отличные сайты для владельцев кошек. Там вы найдете много полезной информации!',
        userId: 1 
    }
];

   additionalPosts.forEach(post => {
    postsContainer.appendChild(createPostElement(post));
     });
    } catch (error) {
     postsContainer.innerHTML = `<div class="error">Ошибка при загрузке постов: ${error.message}</div>`;
    console.error('Ошибка:', error);
       }
   }

   async function createPost() {
            try {
                const title = prompt('Введите заголовок поста:', 'Новый пост');
                if (!title) return;
                
                const body = prompt('Введите текст поста:', 'Это текст нового поста');
                if (!body) return;
                
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: "POST", 
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: title,
                        body: body,
                        userId: 1
                    })
                });
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                
                const newPost = await response.json();
                console.log('Пост создан:', newPost);
                 const postsContainer = document.getElementById('posts-container');
                postsContainer.prepend(createPostElement({
                    id: Date.now(), 
                    title: title,
                    body: body,
                    userId: 1
                }));
                
                alert('Пост успешно создан!');
            } catch (error) {
                console.error('Ошибка при создании поста:', error);
                alert('Не удалось создать пост: ' + error.message);
            }
        }

        function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    
    for (let j = 0; j < n - 1 - i; j++) {
     if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
        swapped = true;
      }
    }
    
    if (!swapped) break;
  }
  
  return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("До сортировки:", array);
console.log("После сортировки:", bubbleSort(array));

