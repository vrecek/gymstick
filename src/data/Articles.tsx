import { ArticleType } from "../interfaces/ArticleType";

import blog1 from '../images/blog/blog1.jpg'
import blog2 from '../images/blog/blog2.jpg'
import blog3 from '../images/blog/blog3.jpg'
import blog4 from '../images/blog/blog4.jpg'
import blog5 from '../images/blog/blog5.jpg'
import blog6 from '../images/blog/blog6.jpg'
import blog7 from '../images/blog/blog7.jpg'
import blog8 from '../images/blog/blog8.jpg'
import blog9 from '../images/blog/blog9.jpg'
import blog10 from '../images/blog/blog10.jpg'
import blog11 from '../images/blog/blog11.jpg'
import blog12 from '../images/blog/blog12.jpg'



const Articles: ArticleType[] = [
    {
        id: '36a2247f1afe4fe097cc5a427c3865c4',
        image: blog1,
        title: 'Making useful and working household training room',
        tags: ['Training', 'Architecture', 'Sport'],
        text: '',
        category: 'Designing',
        likes: 631,
        dislikes: 21,
        views: 2345,
        posted: 'Today',
        comments: [
            {
                author: 'Emmanuel Whitaker',
                avatar: '',
                text: 'Aliquam elementum malesuada velit, non euismod purus mollis nec. Nunc elit mi, varius sed sagittis eget, facilisis pretium dui. Sed mollis aliquam leo, in feugiat massa convallis at.',
                posted: 'Today'
            },

            {
                author: 'Jamil Hawkins',
                avatar: '',
                text: 'Nunc lacus dui, interdum nec mattis vitae, mollis ac elit. Ut feugiat arcu eu sem sodales, sit amet sagittis eros imperdiet. Maecenas pulvinar, ex id gravida pretium',
                posted: 'Today'
            },

            {
                author: 'Caitlyn Maddox',
                avatar: '',
                text: 'Integer dignissim consequat pharetra. Vivamus interdum volutpat ipsum vel blandit. Nullam eu justo luctus, iaculis eros sit amet, varius eros. Nulla sodales massa in facilisis placerat.',
                posted: 'Today'
            },
        ]
    },
    
    {
        image: blog2,
        id: 'f75089b9b26d4182a7b5d07ae97a46b1',
        title: 'How to correctly select a lifting weights?',
        tags: ['Training', 'Tools', 'Sport'],
        text: '',
        category: 'Tutorial',
        likes: 472,
        dislikes: 42,
        views: 2845,
        posted: 'Today',
        comments: [
            {
                author: 'Emmanuel Whitaker',
                avatar: '',
                text: 'Aliquam elementum malesuada velit, non euismod purus mollis nec. Nunc elit mi, varius sed sagittis eget, facilisis pretium dui. Sed mollis aliquam leo, in feugiat massa convallis at.',
                posted: 'Today'
            },

            {
                author: 'Jamil Hawkins',
                avatar: '',
                text: 'Nunc lacus dui, interdum nec mattis vitae, mollis ac elit. Ut feugiat arcu eu sem sodales, sit amet sagittis eros imperdiet. Maecenas pulvinar, ex id gravida pretium',
                posted: 'Today'
            },

            {
                author: 'Caitlyn Maddox',
                avatar: '',
                text: 'Aenean bibendum sapien eu volutpat convallis. Maecenas congue lorem ac congue tempus. Phasellus eu nunc a erat rhoncus auctor. Suspendisse lectus sapien, fringilla quis euismod tristique',
                posted: 'Today'
            },

            {
                author: 'Youssef Vaughn',
                avatar: '',
                text: 'Integer dignissim consequat pharetra. Vivamus interdum volutpat ipsum vel blandit. Nullam eu justo luctus, iaculis eros sit amet, varius eros. Nulla sodales massa in facilisis placerat.',
                posted: 'Today'
            }
        ]
    },

    {
        id: '5c73056125cd46dfb23e593175f4f327',
        image: blog3,
        title: 'How can you tell if a gym is suitable for you?',
        tags: ['Preparing', 'Gym', 'Sport'],
        text: '',
        category: 'Beginner',
        likes: 1611,
        dislikes: 121,
        views: 8345,
        posted: 'A week ago',
        comments: [
            {
                author: 'Emmanuel Whitaker',
                avatar: '',
                text: 'Aliquam elementum malesuada velit, non euismod purus mollis nec. Nunc elit mi, varius sed sagittis eget, facilisis pretium dui. Sed mollis aliquam leo, in feugiat massa convallis at.',
                posted: 'Today'
            },

            {
                author: 'Jamil Hawkins',
                avatar: '',
                text: 'Nunc lacus dui, interdum nec mattis vitae, mollis ac elit. Ut feugiat arcu eu sem sodales, sit amet sagittis eros imperdiet. Maecenas pulvinar, ex id gravida pretium',
                posted: 'Today'
            }
        ]
    },

    {
        id: '3ff7d8dee76647e4b4b41855fc0276a7',
        image: blog4,
        title: '10 everyday habits you should definitely know',
        tags: ['Training', 'Health', 'Sport'],
        text: '',
        category: 'Ranking',
        likes: 2412,
        dislikes: 129,
        views: 6735,
        posted: '4 days ago',
        comments: []
    },

    {
        id: '5c745544a14d49509b88d12ccb504281',
        image: blog12,
        title: 'Consider those health tips during your trainings',
        tags: ['Training', 'Health', 'Sport'],
        text: '',
        category: 'Medicine',
        likes: 431,
        dislikes: 42,
        views: 1694,
        posted: 'Yesterday',
        comments: []
    },

    {
        id: '1567315b6e974bbf9a53fa39a615b6e0',
        image: blog5,
        title: 'How to spot a most common leg injuries?',
        tags: ['Sport', 'Injury', 'Health'],
        text: '',
        category: 'Medicine',
        likes: 1963,
        dislikes: 134,
        views: 4233,
        posted: '5 days ago',
        comments: [
            {
                author: 'Emmanuel Whitaker',
                avatar: '',
                text: 'Aliquam elementum malesuada velit, non euismod purus mollis nec. Nunc elit mi, varius sed sagittis eget, facilisis pretium dui. Sed mollis aliquam leo, in feugiat massa convallis at.',
                posted: 'Today'
            },

            {
                author: 'Jamil Hawkins',
                avatar: '',
                text: 'Nunc lacus dui, interdum nec mattis vitae, mollis ac elit. Ut feugiat arcu eu sem sodales, sit amet sagittis eros imperdiet. Maecenas pulvinar, ex id gravida pretium',
                posted: 'Today'
            },

            {
                author: 'Caitlyn Maddox',
                avatar: '',
                text: 'Aenean bibendum sapien eu volutpat convallis. Maecenas congue lorem ac congue tempus. Phasellus eu nunc a erat rhoncus auctor. Suspendisse lectus sapien, fringilla quis euismod tristique',
                posted: 'Today'
            },

            {
                author: 'Youssef Vaughn',
                avatar: '',
                text: 'Integer dignissim consequat pharetra. Vivamus interdum volutpat ipsum vel blandit. Nullam eu justo luctus, iaculis eros sit amet, varius eros. Nulla sodales massa in facilisis placerat.',
                posted: 'Today'
            },

            {
                author: 'Remi Valenzuela',
                avatar: '',
                text: 'Suspendisse sit amet fringilla ligula. Aliquam vehicula lorem ut vehicula condimentum. Proin facilisis ligula sed mi consectetur, dapibus aliquam tellus suscipit. Duis sodales quis sem vitae viverra. Integer mollis pharetra mauris id feugiat.',
                posted: 'Today'
            }
        ]
    },

    {
        id: '049073d90e684d2b92a926f1f8529a78',
        image: blog6,
        title: 'Choose your ideal and balanced diet',
        tags: ['Health', 'Diet', 'Sport'],
        text: '',
        category: 'Food',
        likes: 1121,
        dislikes: 92,
        views: 3521,
        posted: '5 days ago',
        comments: [
            {
                author: 'Emmanuel Whitaker',
                avatar: '',
                text: 'Aliquam elementum malesuada velit, non euismod purus mollis nec. Nunc elit mi, varius sed sagittis eget, facilisis pretium dui. Sed mollis aliquam leo, in feugiat massa convallis at.',
                posted: 'Today'
            },

            {
                author: 'Jamil Hawkins',
                avatar: '',
                text: 'Nunc lacus dui, interdum nec mattis vitae, mollis ac elit. Ut feugiat arcu eu sem sodales, sit amet sagittis eros imperdiet. Maecenas pulvinar, ex id gravida pretium',
                posted: 'Today'
            },

            {
                author: 'Caitlyn Maddox',
                avatar: '',
                text: 'Aenean bibendum sapien eu volutpat convallis. Maecenas congue lorem ac congue tempus. Phasellus eu nunc a erat rhoncus auctor. Suspendisse lectus sapien, fringilla quis euismod tristique',
                posted: 'Today'
            },

            {
                author: 'Youssef Vaughn',
                avatar: '',
                text: 'Integer dignissim consequat pharetra. Vivamus interdum volutpat ipsum vel blandit. Nullam eu justo luctus, iaculis eros sit amet, varius eros. Nulla sodales massa in facilisis placerat.',
                posted: 'Today'
            }
        ]
    },

    {
        id: 'bc0af149437142ab910341d4857f4085',
        image: blog8,
        title: '12 unhealthy things you are most likely doing',
        tags: ['Health', 'Habits', 'Sport'],
        text: '',
        category: 'Ranking',
        likes: 2861,
        dislikes: 211,
        views: 6645,
        posted: '3 days ago',
        comments: [
            {
                author: 'Emmanuel Whitaker',
                avatar: '',
                text: 'Aliquam elementum malesuada velit, non euismod purus mollis nec. Nunc elit mi, varius sed sagittis eget, facilisis pretium dui. Sed mollis aliquam leo, in feugiat massa convallis at.',
                posted: 'Today'
            },

            {
                author: 'Jamil Hawkins',
                avatar: '',
                text: 'Nunc lacus dui, interdum nec mattis vitae, mollis ac elit. Ut feugiat arcu eu sem sodales, sit amet sagittis eros imperdiet. Maecenas pulvinar, ex id gravida pretium',
                posted: 'Today'
            },

            {
                author: 'Caitlyn Maddox',
                avatar: '',
                text: 'Aenean bibendum sapien eu volutpat convallis. Maecenas congue lorem ac congue tempus. Phasellus eu nunc a erat rhoncus auctor. Suspendisse lectus sapien, fringilla quis euismod tristique',
                posted: 'Today'
            },

            {
                author: 'Youssef Vaughn',
                avatar: '',
                text: 'Integer dignissim consequat pharetra. Vivamus interdum volutpat ipsum vel blandit. Nullam eu justo luctus, iaculis eros sit amet, varius eros. Nulla sodales massa in facilisis placerat.',
                posted: 'Today'
            },

            {
                author: 'Remi Valenzuela',
                avatar: '',
                text: 'Suspendisse sit amet fringilla ligula. Aliquam vehicula lorem ut vehicula condimentum. Proin facilisis ligula sed mi consectetur, dapibus aliquam tellus suscipit. Duis sodales quis sem vitae viverra. Integer mollis pharetra mauris id feugiat.',
                posted: 'Today'
            }
        ]
    },
    
    {
        id: '689c2fb9180b4d60a4b0eed395c3dc28',
        image: blog9,
        title: 'You spend a whole day in a gym every day. Is it any good?',
        tags: ['Training', 'Gym', 'Habits'],
        text: '',
        category: 'Medicine',
        likes: 3444,
        dislikes: 251,
        views: 8758,
        posted: 'A week ago',
        comments: [
            {
                author: 'Caitlyn Maddox',
                avatar: '',
                text: 'Aenean bibendum sapien eu volutpat convallis. Maecenas congue lorem ac congue tempus. Phasellus eu nunc a erat rhoncus auctor. Suspendisse lectus sapien, fringilla quis euismod tristique',
                posted: 'Today'
            },

            {
                author: 'Youssef Vaughn',
                avatar: '',
                text: 'Integer dignissim consequat pharetra. Vivamus interdum volutpat ipsum vel blandit. Nullam eu justo luctus, iaculis eros sit amet, varius eros. Nulla sodales massa in facilisis placerat.',
                posted: 'Today'
            },

            {
                author: 'Remi Valenzuela',
                avatar: '',
                text: 'Suspendisse sit amet fringilla ligula. Aliquam vehicula lorem ut vehicula condimentum. Proin facilisis ligula sed mi consectetur, dapibus aliquam tellus suscipit. Duis sodales quis sem vitae viverra. Integer mollis pharetra mauris id feugiat.',
                posted: 'Today'
            }
        ]
    },

    {
        id: '1fdf201d3bb141e2a72a3473c92b0bec',
        image: blog10,
        title: 'Everyday routine that will improve your health',
        tags: ['Training', 'Habits', 'Health'],
        text: '',
        category: 'Routine',
        likes: 102,
        dislikes: 6,
        views: 431,
        posted: 'Today',
        comments: [
            {
                author: 'Caitlyn Maddox',
                avatar: '',
                text: 'Aenean bibendum sapien eu volutpat convallis. Maecenas congue lorem ac congue tempus. Phasellus eu nunc a erat rhoncus auctor. Suspendisse lectus sapien, fringilla quis euismod tristique',
                posted: 'Today'
            },

            {
                author: 'Youssef Vaughn',
                avatar: '',
                text: 'Integer dignissim consequat pharetra. Vivamus interdum volutpat ipsum vel blandit. Nullam eu justo luctus, iaculis eros sit amet, varius eros. Nulla sodales massa in facilisis placerat.',
                posted: 'Today'
            },

            {
                author: 'Remi Valenzuela',
                avatar: '',
                text: 'Suspendisse sit amet fringilla ligula. Aliquam vehicula lorem ut vehicula condimentum. Proin facilisis ligula sed mi consectetur, dapibus aliquam tellus suscipit. Duis sodales quis sem vitae viverra. Integer mollis pharetra mauris id feugiat.',
                posted: 'Today'
            }
        ]
    },

    {
        id: 'b1b875fcf2c34f0a90fd11aee5bc21da',
        image: blog11,
        title: 'Your instructor will appreciate this small detail',
        tags: ['Training', 'Gym', 'Relation'],
        text: '',
        category: 'Trivia',
        likes: 1243,
        dislikes: 121,
        views: 2585,
        posted: 'Yesterday',
        comments: [
            {
                author: 'Emmanuel Whitaker',
                avatar: '',
                text: 'Aliquam elementum malesuada velit, non euismod purus mollis nec. Nunc elit mi, varius sed sagittis eget, facilisis pretium dui. Sed mollis aliquam leo, in feugiat massa convallis at.',
                posted: 'Today'
            },

            {
                author: 'Jamil Hawkins',
                avatar: '',
                text: 'Nunc lacus dui, interdum nec mattis vitae, mollis ac elit. Ut feugiat arcu eu sem sodales, sit amet sagittis eros imperdiet. Maecenas pulvinar, ex id gravida pretium',
                posted: 'Today'
            },

            {
                author: 'Caitlyn Maddox',
                avatar: '',
                text: 'Aenean bibendum sapien eu volutpat convallis. Maecenas congue lorem ac congue tempus. Phasellus eu nunc a erat rhoncus auctor. Suspendisse lectus sapien, fringilla quis euismod tristique',
                posted: 'Today'
            },

            {
                author: 'Youssef Vaughn',
                avatar: '',
                text: 'Integer dignissim consequat pharetra. Vivamus interdum volutpat ipsum vel blandit. Nullam eu justo luctus, iaculis eros sit amet, varius eros. Nulla sodales massa in facilisis placerat.',
                posted: 'Today'
            }
        ]
    },

    {
        id: 'a125102574bf430d806b350571436e75',
        image: blog7,
        title: '10 things you definitely should not do at the gym',
        tags: ['Training', 'Gym', 'Sport'],
        text: '',
        category: 'Ranking',
        likes: 465,
        dislikes: 43,
        views: 1888,
        posted: '3 days ago',
        comments: [
            {
                author: 'Emmanuel Whitaker',
                avatar: '',
                text: 'Aliquam elementum malesuada velit, non euismod purus mollis nec. Nunc elit mi, varius sed sagittis eget, facilisis pretium dui. Sed mollis aliquam leo, in feugiat massa convallis at.',
                posted: 'Today'
            },

            {
                author: 'Jamil Hawkins',
                avatar: '',
                text: 'Nunc lacus dui, interdum nec mattis vitae, mollis ac elit. Ut feugiat arcu eu sem sodales, sit amet sagittis eros imperdiet. Maecenas pulvinar, ex id gravida pretium',
                posted: 'Today'
            },

            {
                author: 'Caitlyn Maddox',
                avatar: '',
                text: 'Aenean bibendum sapien eu volutpat convallis. Maecenas congue lorem ac congue tempus. Phasellus eu nunc a erat rhoncus auctor. Suspendisse lectus sapien, fringilla quis euismod tristique',
                posted: 'Today'
            },

            {
                author: 'Youssef Vaughn',
                avatar: '',
                text: 'Integer dignissim consequat pharetra. Vivamus interdum volutpat ipsum vel blandit. Nullam eu justo luctus, iaculis eros sit amet, varius eros. Nulla sodales massa in facilisis placerat.',
                posted: 'Today'
            },

            {
                author: 'Remi Valenzuela',
                avatar: '',
                text: 'Suspendisse sit amet fringilla ligula. Aliquam vehicula lorem ut vehicula condimentum. Proin facilisis ligula sed mi consectetur, dapibus aliquam tellus suscipit. Duis sodales quis sem vitae viverra. Integer mollis pharetra mauris id feugiat.',
                posted: 'Today'
            }
        ]
    }
]

export default Articles