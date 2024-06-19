import React, { useRef, useState, useEffect } from 'react'
import {
  AgencyCardWrapper,
  AgencyCardContent,
  AgencyCardDetails,
  AgencyCardProfile,
  AgencyProfileIcon,
  AgencyProfileBio,
  AgencyName,
  AgencyContact,
  AgencySocialMedia,
  AgencyMedia,
  AgencyDescription,
  AgencyPoint,
  AgencyPointTag,
  AgencyWebsiteViewButton,
} from './agency.module'

const AgencyCard = () => {
  const marqueeRef = useRef(null)
  const [agencyData, setAgencyData] = useState([])

  useEffect(() => {
    setAgencyData(initialData)

    const intervalId = setInterval(() => {
      const marquee = marqueeRef.current
      if (marquee.scrollLeft + marquee.clientWidth === marquee.scrollWidth) {
        setAgencyData((prevData) => [...prevData, ...initialData])
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const initialData = [
    {
      logo: '/assets/agency/monkey.svg',
      name: 'MonkE',
      contact: 'www.monke.com',
      des1: 'Influencer Outreach & Negotiations',
      des2: 'Covered with Reporting and Analytics',
      des3: 'Offer Plan & Strategy',
    },
    {
      logo: '/assets/agency/sorted.svg',
      name: 'Bartergram',
      contact: 'www.aakashmakhika.in',
      des1: 'Influencer Outreach & Negotiations',
      des2: 'Covered with Reporting and Analytics',
      des3: 'Offer Plan, Strategy and Execu',
    },
    {
      logo: '/assets/agency/social.svg',
      name: 'SocialTAG',
      contact: 'www.socailtag.com',
      des1: 'Influencer Outreach & Negotiations',
      des2: 'Covered with Reporting and Analytics',
    },
    {
      logo: '/assets/agency/world.svg',
      name: 'WLDD Private Lim...',
      contact: 'www.wldd.market',
      des1: 'Influencer Outreach & Negotiations',
      des2: 'Covered with Reporting and Analytics',
      des3: 'Strategy and Execution',
    },
    {
      logo: '/assets/agency/monkey.svg',
      name: 'MonkE',
      contact: 'www.monke.com',
      des1: 'Influencer Outreach & Negotiations',
      des2: 'Covered with Reporting and Analytics',
      des3: 'Offer Plan & Strategy',
    },
    {
      logo: '/assets/agency/sorted.svg',
      name: 'Bartergram',
      contact: 'www.aakashmakhika.in',
      des1: 'Influencer Outreach & Negotiations',
      des2: 'Covered with Reporting and Analytics',
      des3: 'Offer Plan, Strategy and Execu',
    },
    {
      logo: '/assets/agency/social.svg',
      name: 'SocialTAG',
      contact: 'www.socailtag.com',
      des1: 'Influencer Outreach & Negotiations',
      des2: 'Covered with Reporting and Analytics',
    },
    {
      logo: '/assets/agency/world.svg',
      name: 'WLDD Private Lim...',
      contact: 'www.wldd.market',
      des1: 'Influencer Outreach & Negotiations',
      des2: 'Covered with Reporting and Analytics',
      des3: 'Strategy and Execution',
    },
  ]

  // Function to handle scrolling to the end
  const handleScrollEnd = () => {
    const marquee = marqueeRef.current
    if (marquee.scrollLeft + marquee.clientWidth === marquee.scrollWidth) {
      setAgencyData((prevData) => [...prevData, ...initialData])
    }
  }

  return (
    <div
      className="marquee"
      ref={marqueeRef}
      onScroll={handleScrollEnd}
      style={{
        whiteSpace: 'nowrap',
        overflowX: 'scroll',
        width: '100vw',
        // backgroundColor: "lightgray",
      }}
    >
      <div
        className="marquee-content"
        ref={marqueeRef}
        onScroll={handleScrollEnd}
      >
        {agencyData.map((data, index) => (
          <AgencyCardWrapper key={index}>
            <AgencyCardContent>
              <AgencyCardDetails>
                <AgencyCardProfile>
                  <AgencyProfileIcon>
                    <img src={data?.logo} alt="profile icon" width="100%" />
                  </AgencyProfileIcon>

                  <AgencyProfileBio>
                    <div>
                      <AgencyName>{data?.name}</AgencyName>
                      <AgencyContact>{data?.contact}</AgencyContact>
                    </div>
                    <AgencySocialMedia>
                      <AgencyMedia>
                        <img
                          src="/assets/agency/Insta-grey.svg"
                          alt="insta icon"
                          width="100%"
                          height="100%"
                        />
                      </AgencyMedia>
                      <AgencyMedia>
                        <img
                          src="/assets/agency/Twitter-grey.svg"
                          alt="twitter icon"
                          width="100%"
                          height="100%"
                        />
                      </AgencyMedia>
                      <AgencyMedia>
                        <img
                          src="/assets/agency/Facebook-grey.svg"
                          alt="facebook icon"
                          width="100%"
                          height="100%"
                        />
                      </AgencyMedia>
                    </AgencySocialMedia>
                  </AgencyProfileBio>
                </AgencyCardProfile>
                <AgencyDescription>
                  <AgencyPoint>
                    <AgencyPointTag>
                      <img
                        src="/assets/agency/pointArrow.svg"
                        alt="point"
                        width="100%"
                        height="100%"
                      />
                    </AgencyPointTag>
                    <div>{data?.des1}</div>
                  </AgencyPoint>
                  <AgencyPoint>
                    <AgencyPointTag>
                      <img
                        src="/assets/agency/pointArrow.svg"
                        alt="point"
                        width="100%"
                        height="100%"
                      />
                    </AgencyPointTag>
                    <div>{data?.des2}</div>
                  </AgencyPoint>
                  {data?.des3 && (
                    <AgencyPoint>
                      <AgencyPointTag>
                        <img
                          src="/assets/agency/pointArrow.svg"
                          alt="point"
                          width="100%"
                          height="100%"
                        />
                      </AgencyPointTag>
                      <div>
                        {data?.des3}{' '}
                        {data?.name === 'Bartergram' && <span>...more</span>}
                      </div>
                    </AgencyPoint>
                  )}
                </AgencyDescription>
              </AgencyCardDetails>
              <AgencyWebsiteViewButton>
                View Website
                <div>
                  <img
                    src="/assets/aboutContentImages/arrow.svg"
                    alt="arrow"
                    height="100%"
                    width="auto"
                  />
                </div>
              </AgencyWebsiteViewButton>
            </AgencyCardContent>
          </AgencyCardWrapper>
        ))}
      </div>
    </div>
  )
}

export default AgencyCard
