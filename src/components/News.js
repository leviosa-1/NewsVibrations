import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from  './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
        articles= [
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Here's Why Blueberries Are Good For The Heart - NDTV",
            "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
            "url": "https://www.ndtv.com",
            "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
            "publishedAt": "2024-05-28T10:20:06Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Dishya Sharma",
            "title": "Panchayat 3: Jitendra Kumar Salary REVEALED? He Charges Highest Fees, Neena Gupta Asks Rs 50K Per Episode - News18",
            "description": "Panchayat season 3 premiered on Tuesday, May 28. Amid the reviews, a new report allegedly revealed the cast members' salaries.",
            "url": "https://www.news18.com/movies/panchayat-3-jitendra-kumar-salary-revealed-he-charges-highest-fees-neena-gupta-asks-rs-50k-per-episode-8906849.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/panchayat-3-2024-05-371860b4b518b9f9207c8987af43b7f5-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2024-05-28T10:15:59Z",
            "content": "Panchayat season 3 released on Tuesday, May 28. The Amazon Prime Video series brings back the OG stars Jitendra Kumar, Neena Gupta, Raghubir Yadav, Sanvikaa, and Chandan Roy for another fun season. W… [+2228 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "Divya Bhati",
            "title": "iOS 18 will be all about customisation options in iPhone: Recolor App Icons, Home screen and more to expect - India Today",
            "description": "Apple039s iOS 18 promises to be the biggest update in iOS history focusing on extensive customisation options and AI integration",
            "url": "https://www.indiatoday.in/technology/news/story/ios-18-will-be-all-about-customisation-options-in-iphone-recolor-app-icons-home-screen-and-more-to-expect-2544813-2024-05-28",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/ios-265129864-16x9_0.jpg?VersionId=jbdGbjCg.l8ey3OpqWsb_3Ei34XoPypB",
            "publishedAt": "2024-05-28T10:01:14Z",
            "content": "Apple is gearing up for its developer conference WWDC 2024 next month, and one of the big highlights of the event will be iOS 18. The new OS update for iPhones is said to bring the biggest revamp in … [+3708 chars]"
          },
          {
            "source": {
              "id": "associated-press",
              "name": "Associated Press"
            },
            "author": "JOSEPH WILSON",
            "title": "Spain and Norway formally recognize a Palestinian state as EU rift with Israel widens - The Associated Press",
            "description": "Spain, Norway and Ireland have moved to formally recognize a Palestinian state in a coordinated effort by the three western European nations. While dozens of countries have recognized a Palestinian state, none of the major Western powers has done so. Relation…",
            "url": "https://apnews.com/article/eu-palestinian-state-spain-israel-gaza-6efe351e53761befc2c539c535bbcc0c",
            "urlToImage": "https://dims.apnews.com/dims4/default/e478ecb/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff9%2Ff0%2Fa8e914c2de242e8cc9fd1d5f1ae7%2F6a3796ae0bb846dfb2883ffa79f366c4",
            "publishedAt": "2024-05-28T09:56:00Z",
            "content": "BARCELONA, Spain (AP) Spain, Norway and Ireland moved to formally recognize a Palestinian state on Tuesday in a coordinated effort by the three western European nations designed to add international … [+7211 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "Rosali+Ghosh, Times Now Digital",
            "title": "Planet Parade: All You Need To Know About The Rare Cosmic Event On June 3 - Times Now",
            "description": "Planet Parade: All You Need To Know About The Rare Cosmic Event On June 3",
            "url": "https://www.timesnownews.com/web-stories/science/planet-parade-all-you-need-to-know-about-the-rare-cosmic-event-on-june-3/photostory/110495033.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-110495071,width-900,height-1200,resizemode-6.cms",
            "publishedAt": "2024-05-28T09:36:40Z",
            "content": "During the parade, six planets including Mercury, Mars, Jupiter, Saturn, Uranus, and Neptune, revolving around the sun in an elliptical orbit will appear as they are passing in a straight line."
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Science Desk",
            "title": "Nasa's Magellan data indicates volcanic activity on Venus - The Times of India",
            "description": "Science News: NEW DELHI: A recent analysis of data collected by Nasa's Magellan spacecraft between 1990 and 1992 reveals evidence of fresh lava flows on the planet'.",
            "url": "https://timesofindia.indiatimes.com/home/science/nasas-magellan-data-indicates-volcanic-activity-on-venus/articleshow/110494301.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-110494649,width-1070,height-580,imgsize-1036802,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-05-28T09:28:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "\"KCR Wanted To Arrest BJP's BL Santosh, Force BJP To...\": Big Claim In Phone Tapping Row - NDTV",
            "description": "Inquiries into the Telangana phone-snooping row have thrown up yet an explosive allegation - that then Chief Minister KCR wanted to arrest senior BJP leader BL Santosh to force a \"compromise\" and negotiate the release of his daughter, K Kavitha.",
            "url": "https://www.ndtv.com/india-news/telangana-phone-tapping-case-kcr-wanted-to-arrest-bjps-bl-santosh-big-claim-in-phone-tapping-row-5763299",
            "urlToImage": "https://c.ndtvimg.com/2024-05/tm5a1bjo_k-chandrasekhar-rao-kcr-bl-santosh_625x300_28_May_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240506.08",
            "publishedAt": "2024-05-28T09:24:56Z",
            "content": "BJP National General Secretar BL Santosh and Ex-Telangana Chief Minister K Chandrasekhar Rao.\r\nHyderabad: Inquiries into the Telangana phone-snooping row have thrown up yet another explosive allegati… [+5444 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "Gautam Gambhir's 3-Word Post Brilliantly Sums Up KKR's IPL 2024 Triumph - NDTV Sports",
            "description": "Gautam Gambhir shared a 3-word post after KKR beat SRH in IPL 2024 final. The post sums up the mindset of KKR mentor.",
            "url": "https://sports.ndtv.com/ipl-2024/gautam-gambhir-sums-up-secret-to-kkrs-ipl-2024-success-with-3-word-post-5754543",
            "urlToImage": "https://c.ndtvimg.com/2024-05/19tqb9t8_gautam-gambhir_625x300_27_May_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2024-05-28T09:12:00Z",
            "content": "The Indian Premier League (IPL) 2024 concluded with Kolkata Knight Riders emerging as the deserved winners. In the summit clash on Sunday, the Knight Riders left little scope for improvement, produci… [+1939 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Delhi court rejects Umar Khalid's bail application in riots case - Hindustan Times",
            "description": "Umar Khalid is an accused in a UAPA case linked to the 2020 Delhi riots. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/delhi-court-rejects-umar-khalids-bail-application-in-riots-case-101716886825369.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/28/1600x900/Umar-Khalid-leaves-Tihar-Jail-in-New-Delhi-on-Frid_1671821433031_1716887085385.jpg",
            "publishedAt": "2024-05-28T09:01:48Z",
            "content": "Delhi's Karkardooma court on Tuesday rejected the bail application of former JNU student leader Umar Khalid in the larger conspiracy case linked to 2020 Delhi riots. \r\nUmar Khalid (ANI file photo)\r\nU… [+2319 chars]"
          },
          {
            "source": {
              "id": "google-news",
              "name": "Google News"
            },
            "author": "Mint",
            "title": "Iran shifts focus to presidential election after mourning Ebrahim Raisi | Today News - Mint",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiqAFodHRwczovL3d3dy5saXZlbWludC5jb20vbmV3cy93b3JsZC9pcmFuLXByZXNpZGVudGlhbC1lbGVjdGlvbnMtanVuZS0yOC1tb2hhbW1hZC1iYXFlci1xYWxpYi1lYnJhaGltLXJhaXNpLWlzcmFlbC1nYXphLXdhci1wYWxlc3RpbmUtaGFtYW1pZGRsZS1lYXN0LTExNzE2ODczMDgyNzYzLmh0bWzSAawBaHR0cHM6Ly93d3cubGl2ZW1pbnQuY29tL25ld3Mvd29ybGQvaXJhbi1wcmVzaWRlbnRpYWwtZWxlY3Rpb25zLWp1bmUtMjgtbW9oYW1tYWQtYmFxZXItcWFsaWItZWJyYWhpbS1yYWlzaS1pc3JhZWwtZ2F6YS13YXItcGFsZXN0aW5lLWhhbWFtaWRkbGUtZWFzdC9hbXAtMTE3MTY4NzMwODI3NjMuaHRtbA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-05-28T08:48:08Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Xiaomi 14 CIVI India launch on June 12: Expected price to camera details, top 5 things you should know | Mint - Mint",
            "description": "Xiaomi confirms launch date for Xiaomi 14 CIVI, likely a rebranded version of CIVI 4 Pro. Expected specs include 6.55 inch OLED display, Snapdragon 8s Gen chipset, up to 16GB RAM, 512GB storage, and 4,700mAh battery with 67W fast charging.",
            "url": "https://www.livemint.com/technology/gadgets/xiaomi-14-civi-india-launch-on-june-12-expected-price-to-camera-details-top-5-things-you-should-know-11716883859233.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/05/28/1600x900/GOj74oXWwAAU-Co_1716885264833_1716885272512.jpg",
            "publishedAt": "2024-05-28T08:45:28Z",
            "content": "Xiaomi has confirmed the launch date for latest smartphone in its flagship number series, the Xiaomi 14 CIVI. The latest smartphone is likely to be a rebranded version of CIVI 4 Pro, a smartphone whi… [+2148 chars]"
          },
          {
            "source": {
              "id": "google-news",
              "name": "Google News"
            },
            "author": "Gadgets 360",
            "title": "Samsung Galaxy F55 5G With Vegan Leather Finish Launched in India: All You Need to Know - Gadgets 360",
            "description": null,
            "url": "https://news.google.com/rss/articles/CCAiCzY5Ui1UY1VHSHdrmAEB?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-05-28T08:21:19Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Patna College Student Beaten To Death On Campus. Reason: Dandiya Argument - NDTV",
            "description": "A 22-year-old student was beaten to death on the campus of a law college in Bihar's capital, Patna.",
            "url": "https://www.ndtv.com/india-news/harsh-raj-masked-men-with-sticks-beat-student-22-to-death-on-patna-college-campus-5762827",
            "urlToImage": "https://c.ndtvimg.com/2024-05/0ca7a7hg_harsh-raj_625x300_28_May_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240506.08",
            "publishedAt": "2024-05-28T08:20:53Z",
            "content": "Harsh Raj, 22, was a third-year student of vocational English\r\nPatna: A day after a 22-year-old student was beaten to death by masked men on the campus of a college in Patna, police have arrested the… [+2367 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "🔴 Final Trade Live Updates: Stock Market | Share Market Updates | Latest Business News | CNBC Awaaz - CNBC Awaaz.",
            "description": null,
            "url": "https://www.youtube.com/watch?v=TIhffPbmtV8",
            "urlToImage": null,
            "publishedAt": "2024-05-28T08:20:09Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "PM Modi offers aid to Papua New Guinea as landslide buries 2,000: ‘India ready’ - Hindustan Times",
            "description": "Papua New Guinea landslide: India extended an immediate relief assistance of USD 1 million to support relief, rehabilitation and reconstruction efforts | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/pm-modi-offers-aid-to-papua-new-guinea-as-landslide-buries-2-000-india-ready-101716866667461.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/28/1600x900/modipapua1_1684735785013_1716866698168.jpg",
            "publishedAt": "2024-05-28T07:26:13Z",
            "content": "Prime Minister Narendra Modi expressed grief over a massive landslide in Papua New Guinea that has buried over 2,000 people and affected thousands more after a mountain collapsed in the northern regi… [+2797 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "S Aadeetya",
            "title": "Sony Unveils New ULT Power Sound Series Speakers And Wireless Headphones In India: Price, Features - News18",
            "description": "Sony introduced the new audio lineup globally earlier this year and the new ULT series looks to build on its strong market value.",
            "url": "https://www.news18.com/tech/sony-unveils-new-ult-power-sound-series-speakers-and-wireless-headphones-in-india-price-features-8906850.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/sony-ult-speakers-india-2024-05-67ea08108e02787092bca59102e445dc-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2024-05-28T07:24:52Z",
            "content": "Sony is launching its new set of audio products in India, called the 'ULT Power Sound' series. This new lineup includes Bluetooth-enabled speakers Sony ULT Tower 10, ULT Field 7, and ULT Field 1 and … [+2072 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "NIN Recommends New Sugar Content Thresholds In Packaged Foods & Beverages: Report - ABP Live",
            "description": "The institution has introduced the threshold for the first time and this development could leave an impact on branded soft beverages, cookies, juices, ice-creams, and cereals, among other items",
            "url": "https://news.abplive.com/business/nin-recommends-new-sugar-content-thresholds-in-packaged-foods-beverages-report-1690778",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2024/05/28/67e5ba185a746ca0308be995f96062931716880745343800_original.jpg?impolicy=abp_cdn&imwidth=1200",
            "publishedAt": "2024-05-28T07:20:09Z",
            "content": "The National Institute of Nutrition (NIN) reportedly recommended limits for sugar content in packaged foods and beverages. Media reports said that the institution has introduced the threshold for the… [+1961 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "Ashima+Sharda+Mahindra, Times Now Digital",
            "title": "Indian Sweets Made With Calcium-rich Milk - Times Now",
            "description": "Indian Sweets Made With Calcium-rich Milk",
            "url": "https://www.timesnownews.com/web-stories/health/indian-sweets-made-with-calcium-rich-milk/photostory/110489266.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-110491327,width-900,height-1200,resizemode-6.cms",
            "publishedAt": "2024-05-28T07:06:39Z",
            "content": "Even though it is high in calories, ras malai is loaded with calcium and protein since it is made directly with milk and paneer. However, it is also rich in different vitamins and minerals like Vitam… [+53 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "DAWN.com"
            },
            "author": null,
            "title": "Rohit, Kohli in focus as India look to end title drought at T20 World Cup - DAWN.com",
            "description": "Checkout for the Latest and Top News from Pakistan and around the world",
            "url": "https://www.dawn.com/",
            "urlToImage": "https://www.dawn.com/_img/social-default.jpg",
            "publishedAt": "2024-05-28T07:05:15Z",
            "content": "Elected unopposed as the PML-N president.\r\nPublished28 May, 202404:23pm\r\nLive \r\nIsraeli tanks reach Rafah city centre, witnesses say.\r\nUpdated28 May, 202404:09pm\r\nPraise Bhutto's efforts; Shehbaz hig… [+1061 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Piyali Bhadra",
            "title": "Signs of vitamin b12 deficiency seen in women - The Times of India",
            "description": "Let's take a look at the symptoms of vitamin b12 deficiency.",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/web-stories/signs-of-vitamin-b12-deficiency-seen-in-women/photostory/110465446.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-110465457,imgsize-524745,width-900,height-1200,resizemode-6/110465457.jpg",
            "publishedAt": "2024-05-28T06:30:00Z",
            "content": "A deficiency of B12 would lead to nausea, constipation, bloating, gas, and diarrhea in our bodies. Therefore, if youre observing these symptoms more, opt for a B12 test."
          }
        ]

        static defaultProps = {
          country : 'in',
          pageSize: 8,
          catagory : 'general',
        }

        PropTypes = {
          country : PropTypes.string,
          pageSize: PropTypes.number,
          catagory :PropTypes.string,

        }

        constructor (props){
            super(props);
            this.state = {
            articles: this.articles,
            loading:  false,
            page: 1,
            totalResults: 0
            } 
            document.title= `${this.props.catagory} - NewsVibration`
        }
        async update(){
          this.props.setProgress(10);
          const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
          let data = await fetch(url);
          this.setState({loading:true})
          this.props.setProgress(30);
          let parsedData = await data.json();
          this.props.setProgress(70);
          console.log(parsedData);
          this.setState({articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading:false
          });
          this.props.setProgress(100);
        }
        async componentDidMount(){
            this.update();
        }

        // handleNextClick = async()=>{
        //   console.log("Next");
        //   // if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

        //   // }
        //   // else{
        //   //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99fd3ae9b0924608b2bc776fa9cbfee4&page=
        //   //     ${this.state.page+1}&pageSize=${this.props.pageSize}`;
        //   //     this.setState({loading:true})
        //   //     let data = await fetch(url);
        //   //     let parsedData = await data.json();
        //   //     this.setState({
        //   //       page: this.state.page+1,
        //   //       articles: parsedData.articles,
        //   //       loading: false
        //   //     })
        //   // }

        //   this.setState({page: this.state.page+1});
        //   this.update();
        // }

        // handlePrevClick= async() => {
        //   console.log("previous");
        //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99fd3ae9b0924608b2bc776fa9cbfee4&page=
        //   // ${this.state.page+-1}&pagesize=${this.props.pageSize}`;
        //   // this.setState({loading: true})
        //   // let data = await fetch(url);
        //   // let parsedData = await data.json();
        //   // this.setState({
        //   //   page: this.state.page-1,
        //   //   articles: parsedData.articles,
        //   //   loading: false
        //   // })
        //   this.setState({page: this.state.page-1});
        //   this.update();
        // }
        fetchMoreData = async() => {
          this.setState({page: this.state.page+1});
          const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
          let data = await fetch(url);
          let parsedData = await data.json();
          console.log(parsedData);
          this.setState({articles: this.state.articles.concat(parsedData.articles), 
            totalResults: parsedData.totalResult
          });

        };
  render() {
    return (
      <>
        <h1 className='text-center' style={{margin: '75px 0px 20px' }}>News Vibration- Top Headlines  </h1>
      
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container my-4">
          <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4 my-5" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description:""} 
                  imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} className="card-img-top"/>
              </div>
            })}
           </div>
        </div>
      </InfiniteScroll>
      </>
    )
  }
}
