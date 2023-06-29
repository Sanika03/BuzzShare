import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "useContext (React hook) helps access global data without having to pass props again and again (prop drilling) within the same file-based React application.",
    media: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Sanika",
    lastName: "Suryawanshi",
    username: "sanika3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687290002/Children_avatars_01Un_15_d8ahbg.jpg",
    comments: [
      {
        _id: uuid(),
        comment: "Thanks for sharing!",
        firstName: "Caleb",
        lastName: "Reynolds",
        username: "caleb3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289188/832_ejd4g7.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        comment:
          "Got to know this today, thanks!",
        firstName: "Ava",
        lastName: "Patel",
        username: "ava3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289969/39548_vclqqg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Went for an amazing trek today. It was really refreshing!",
    media: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687260425/mountain_pg1ozy.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Caleb",
    lastName: "Reynolds",
    username: "caleb3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289188/832_ejd4g7.jpg",
    comments: [
      {
        _id: uuid(),
        comment:
          "That's great!",
        firstName: "Sanika",
        lastName: "Suryawanshi",
        username: "sanika3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687290002/Children_avatars_01Un_15_d8ahbg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        comment:
          "Looks beautiful!",
        firstName: "Ava",
        lastName: "Patel",
        username: "ava3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289969/39548_vclqqg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Exploring the vibrant streets of Tokyo, a city bustling with life and endless energy. Amidst the neon lights and crowded sidewalks, there's a hidden gem for food lovers. Don't miss out on the mouthwatering delicacies at @sushi_sensations, tucked away in the heart of Shibuya. Savor the flavors and experience a culinary adventure like no other.",
    media: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687260573/tokyo_lbfzqm.png",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Ava",
    lastName: "Patel",
    username: "ava3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289987/39550_ib1rq9.jpg",
    comments: [
      {
        _id: uuid(),
        comment:
          "Wow!",
          firstName: "Caleb",
          lastName: "Reynolds",
          username: "caleb3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289188/832_ejd4g7.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        comment:
          "Will try that sushi next time I go there.",
        firstName: "Ava",
        lastName: "Patel",
        username: "ava3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289969/39548_vclqqg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Need a feel-good movie recommendation? Give 'The Intern' a watch for a heartwarming story and great performances. It's a delightful film that'll brighten up your day! ",
    media: "",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Sanika",
    lastName: "Suryawanshi",
    userName: "sanika3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687290002/Children_avatars_01Un_15_d8ahbg.jpg",
    comments: [
      {
        _id: uuid(),
        comment:
          "Thanks for suggestion!",
          firstName: "Caleb",
          lastName: "Reynolds",
          username: "caleb3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289188/832_ejd4g7.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        comment:
          "Will surely watch it.",
        firstName: "Ava",
        lastName: "Patel",
        username: "ava3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289969/39548_vclqqg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    media: "",
    likes: {
      likeCount: 11,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Caleb",
    lastName: "Reynolds",
    username: "caleb3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289188/832_ejd4g7.jpg",
    comments: [
      {
        _id: uuid(),
        comment: "Great!",
        firstName: "Sanika",
        lastName: "Suryawanshi",
        username: "sanika3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687290002/Children_avatars_01Un_15_d8ahbg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        comment:
          "Thanks for sharing!",
        firstName: "Ava",
        lastName: "Patel",
        username: "ava3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289969/39548_vclqqg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "JavaScript: the language that brings web pages to life! With its versatility and interactivity, it's no wonder why it's a favorite among developers. From dynamic animations to powerful web applications, JavaScript empowers creativity and innovation.",
    media: "",
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Benjamin",
    lastName: "Hayes",
    username: "benjamin3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289094/60111_oliiv2.jpg",
    comments: [
      {
        _id: uuid(),
        comment:
          "Indeed.",
          firstName: "Caleb",
          lastName: "Reynolds",
          username: "caleb3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289188/832_ejd4g7.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        comment:
          "Agreed, it's great",
        firstName: "Ava",
        lastName: "Patel",
        username: "ava3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289969/39548_vclqqg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Solving errors on a nice breezy day. How's your day going?",
    media: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687262562/error_tfmquj.jpg",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Benjamin",
    lastName: "Hayes",
    username: "benjamin3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289094/60111_oliiv2.jpg",
    comments: [
      {
        _id: uuid(),
        comment:
          "Going great.",
          firstName: "Caleb",
          lastName: "Reynolds",
          username: "caleb3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289188/832_ejd4g7.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        comment:
          "Having the best day.",
        firstName: "Ava",
        lastName: "Patel",
        username: "ava3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289969/39548_vclqqg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "DID YOU KNOW? When a MicroTask is created and another microtask is created inside it and another one in it and so on, then the callback queue never gets a chance to be executed and then the call stack goes into starvation.",
    media: "",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Sanika",
    lastName: "Suryawanshi",
    username: "sanika3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687290002/Children_avatars_01Un_15_d8ahbg.jpg",
    comments: [
      {
        _id: uuid(),
        comment:
          "Woah, I got to know about this today.",
          firstName: "Caleb",
          lastName: "Reynolds",
          username: "caleb3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289188/832_ejd4g7.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        comment:
          "Thanks for sharing!",
        firstName: "Ava",
        lastName: "Patel",
        username: "ava3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289969/39548_vclqqg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];