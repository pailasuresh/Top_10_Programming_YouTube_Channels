import DestinationSearch from './components/DestinationSearch'

import './App.css'

const destinationsList = [
  {
    id: 1,
    name: 'Traversy Media',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7X-1cxjxETJNmjEbR1vHBYsJW034cOuW0mmj28kQMy0o6qFGr0pg_aYj4iJTGD3MQjA&usqp=CAU',
    link: 'https://www.youtube.com/results?search_query=traversy+media',
  },
  {
    id: 2,
    name: 'freeCodeCamp.org',
    imgUrl:
      'https://repository-images.githubusercontent.com/324079984/81361f80-a78c-11eb-8c8b-07231757435d',
    link: 'https://www.youtube.com/results?search_query=freecodecamp',
  },
  {
    id: 3,
    name: 'Programming with Mosh',
    imgUrl:
      'https://s3-eu-west-1.amazonaws.com/tpd/logos/5ec0ec95012e830001d918b3/0x0.png',
    link: 'https://www.youtube.com/results?search_query=Programming+with+Mosh+',
  },
  {
    id: 4,
    name: 'The Net Ninja',
    imgUrl:
      'https://media.licdn.com/dms/image/C4E0BAQE3XunDtaXEGg/company-logo_200_200/0/1677491111623/the_net_ninja_uk_logo?e=2147483647&v=beta&t=SP36BbSbSO3Xnx78CN_-XRVV5q83V4JoPeXaAb3-ljo',
    link: 'https://www.youtube.com/results?search_query=the+net+ninja',
  },
  {
    id: 5,
    name: 'Codecademy',
    imgUrl:
      'https://w7.pngwing.com/pngs/559/730/png-transparent-codecademy-learning-learn-sql-computer-programming-centralisation-angle-text-rectangle.png',
    link: 'https://www.youtube.com/results?search_query=Codecademy+',
  },
  {
    id: 6,
    name: 'CS Dojo',
    imgUrl:
      'https://yt3.googleusercontent.com/ytc/AIdro_mxJvgrBjcgK94ZJQwDphl0UFkCKRL8AOa7UvmR__MIyg=s900-c-k-c0x00ffffff-no-rj',
    link: 'https://www.youtube.com/results?search_query=CS+Dojo+',
  },
  {
    id: 7,
    name: 'The Coding Train',
    imgUrl:
      'https://yt3.googleusercontent.com/99wepc_FTSN0n_GbR-FlFANyxed7TsbE8WxKIDWftdxssZlYo1-gW1CRD7cPgOzThMM8m4W8=s900-c-k-c0x00ffffff-no-rj',
    link: 'https://www.youtube.com/results?search_query=The+Coding+Train',
  },
  {
    id: 8,
    name: 'CodeWithHarry',
    imgUrl:
      'https://yt3.googleusercontent.com/ytc/AIdro_kNaumymcxYzV7_n7_VRbQ2TRlIbU2w5csOMN0cH8jiED8=s900-c-k-c0x00ffffff-no-rj',
    link: 'https://www.youtube.com/results?search_query=CodeWithHarry',
  },
  {
    id: 9,
    name: 'Apna College',
    imgUrl:
      'https://yt3.googleusercontent.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s900-c-k-c0x00ffffff-no-rj',
    link: 'https://www.youtube.com/results?search_query=apna+college',
  },
  {
    id: 10,
    name: 'edureka!',
    imgUrl:
      'https://yt3.googleusercontent.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s900-c-k-c0x00ffffff-no-rj',
    link: 'https://www.youtube.com/results?search_query=edureka!',
  },
]

const App = () => <DestinationSearch destinationsList={destinationsList} />

export default App
