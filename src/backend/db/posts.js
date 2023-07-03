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
    postImage: "",
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
      }
    ],
    createdAt: "2023-06-04T10:06:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Went for an amazing trek today. It was really refreshing!",
    postImage: "https://res.cloudinary.com/dnagcmyka/video/upload/v1688408285/pexels-vanessa-garcia-6319541_2160p_l7dfz8.mp4",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Caleb",
    lastName: "Reynolds",
    username: "caleb3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289188/832_ejd4g7.jpg",
    comments: [],
    createdAt: "2023-06-26T10:06:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Exploring the vibrant streets of Tokyo, a city bustling with life and endless energy. Amidst the neon lights and crowded sidewalks, there's a hidden gem for food lovers. Don't miss out on the mouthwatering delicacies at @sushi_sensations, tucked away in the heart of Shibuya. Savor the flavors and experience a culinary adventure like no other.",
    postImage: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687260573/tokyo_lbfzqm.png",
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
    createdAt: "2023-05-19T10:06:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Need a feel-good movie recommendation? Give 'The Intern' a watch for a heartwarming story and great performances. It's a delightful film that'll brighten up your day! ",
    postImage: "",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Olivia",
    lastName: "Garcia",
    username: "olivia3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289987/39550_ib1rq9.jpg",
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
      {
        _id: uuid(),
        comment:
          "Thanks for suggestion!",
        firstName: "Sanika",  
        lastName: "Suryawanshi",
        username: "sanika3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687290002/Children_avatars_01Un_15_d8ahbg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      }
    ],
    createdAt: "2023-05-09T10:06:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    postImage: "",
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
    createdAt: "2023-04-30T10:06:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "JavaScript: the language that brings web pages to life! With its versatility and interactivity, it's no wonder why it's a favorite among developers. From dynamic animations to powerful web applications, JavaScript empowers creativity and innovation.",
    postImage: "",
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Benjamin",
    lastName: "Hayes",
    username: "benjamin3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289094/60111_oliiv2.jpg",
    comments: [],
    createdAt: "2023-03-14T10:06:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Solving errors on a nice breezy day. How's your day going?",
    postImage: "https://res.cloudinary.com/dnagcmyka/image/upload/v1688418108/pexels-tranmautritam-245032_ajhmfz.jpg",
    likes: {
      likeCount: 8,
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
    createdAt: "2023-03-06T10:06:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "DID YOU KNOW? When a MicroTask is created and another microtask is created inside it and another one in it and so on, then the callback queue never gets a chance to be executed and then the call stack goes into starvation.",
    postImage: "",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Isaac",
    lastName: "Anderson",
    username: "isaac3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289356/57854_ng7chz.jpg",
    comments: [
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
    createdAt: "2023-02-28T10:06:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Excited to share that I've been hired as a Frontend Developer intern at Google! 🎉 Looking forward to this amazing opportunity to learn and contribute to innovative projects. Grateful for the support and guidance that got me here. Let the coding adventures begin!",
    postImage: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Emily",
    lastName: "Turner",
    username: "emily3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687290014/39547_kmyvnn.jpg",
    comments: [
      {
        _id: uuid(),
        comment: "Congratulations on the great achievement!",
        firstName: "Ava",
        lastName: "Patel",
        username: "ava3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289969/39548_vclqqg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2023-07-04T10:06:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Just had an unforgettable getaway at the Lakeside Haven Resort, nestled right by the tranquil shores of a breathtaking lake. The picturesque views, cozy accommodations, and impeccable hospitality made it a truly remarkable experience. Waking up to the sound of gentle waves and being surrounded by nature's serenity was a dream come true.",
    postImage: "https://res.cloudinary.com/dnagcmyka/image/upload/v1688413386/hotel_ac5him.jpg",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Elijah",
    lastName: "Wright",
    username: "elijah3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289464/828_etzai0.jpg",
    comments: [
      {
        _id: uuid(),
        comment:"Thanks for sharing!",
        firstName: "Ava",
        lastName: "Patel",
        username: "ava3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687289969/39548_vclqqg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        comment: "Thanks for sharing!",
        firstName: "Sophia",
        lastName: "Mitchell",
        username: "sophia3103",
        profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687290411/39551_xgxenv.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      }
    ],
    createdAt: "2023-02-28T10:06:52+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Amazed by the profound impact of the subconscious mind! It's fascinating how our thoughts and beliefs shape our reality. Exploring the power within us and unlocking its potential can lead to incredible transformations. Recommend everybody to read 'The Power of your Subconscious Mind.",
    postImage: "",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Sophia",
    lastName: "Mitchell",
    username: "sophia3103",
    profileAvatar: "https://res.cloudinary.com/dnagcmyka/image/upload/v1687290411/39551_xgxenv.jpg",
    comments: [],
    createdAt: "2023-02-07T10:06:52+05:30",
    updatedAt: formatDate(),
  }
];