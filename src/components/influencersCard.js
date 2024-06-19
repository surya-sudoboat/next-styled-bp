import React from 'react'
import {
  InfluencersCardWrapper,
  InfluencerProfile,
  InfluencerName,
  InfluencerLocation,
  InfluencersProfileDetails,
  InfluencersShortBio,
  InfluencerSocialMedia,
  InfluencerInstagram,
  InfluencerPlayVedio,
  InfluencerTags,
  InfluencerAboutTag1,
  InfluencerAboutTag2,
  InfluencerViewProfileButton,
  InfluencersCardBox,
} from './influencers.module'

const InfluencersCard = () => {
  const InfluencersData = [
    {
      profile: '/assets/influencers/kangan.svg',
      name: 'Kangan',
      location: 'Bangalore',
      instaFollowers: '708k',
      vedioFollowers: '47k',
      AboutTag1: 'Entertainment',
      AboutTag2: 'Lifestyle',
    },
    {
      profile: '/assets/influencers/IsaKhan.svg',
      name: 'Isa Khan',
      location: 'Bangalore',
      instaFollowers: '826k',
      vedioFollowers: '117k',
      AboutTag1: 'Photographers',
      AboutTag2: 'Profes...',
    },
    {
      profile: '/assets/influencers/DevanshKamboj.svg',
      name: 'Devansh Kamboj',
      location: 'Bangalore',
      instaFollowers: '128k',
      vedioFollowers: '7k',
      AboutTag1: 'Lifestyle',
      AboutTag2: 'Fashion',
    },
    {
      profile: '/assets/influencers/KumariSuprava.svg',
      name: 'Kumari Suprava',
      location: 'Bangalore',
      instaFollowers: '197k',
      vedioFollowers: '28k',
      AboutTag1: 'Lifestyle',
      AboutTag2: 'Parenting',
    },
    {
      profile: '/assets/influencers/VaishnaviPrakash.svg',
      name: 'Vaishnavi Prakash',
      location: 'Bangalore',
      instaFollowers: '223k',
      vedioFollowers: '21k',
      AboutTag1: 'Lifestyle',
      AboutTag2: 'Parenting',
    },
  ]
  return (
    <div className="marquee">
      <div className="marquee-content">
        {InfluencersData.map((data, index) => (
          <InfluencersCardWrapper key={index}>
            <InfluencersCardBox>
              <InfluencersShortBio>
                <InfluencersProfileDetails>
                  <InfluencerProfile>
                    <img src={data?.profile} alt="profile" width="100%" />
                  </InfluencerProfile>
                  <InfluencerName>{data?.name}</InfluencerName>
                  <InfluencerLocation>{data?.location}</InfluencerLocation>
                  <InfluencerSocialMedia>
                    <InfluencerInstagram>
                      <div>
                        <img
                          src="/assets/influencers/instagramIcon.svg"
                          alt="Instagram"
                          width="100%"
                          height="100%"
                        />
                      </div>

                      <div>{data?.instaFollowers}</div>
                    </InfluencerInstagram>
                    <span></span>
                    <InfluencerPlayVedio>
                      <div>
                        <img
                          src="/assets/influencers/vedioIcon.svg"
                          alt="Vedio"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div>{data?.vedioFollowers}</div>
                    </InfluencerPlayVedio>
                  </InfluencerSocialMedia>
                </InfluencersProfileDetails>

                <InfluencerTags>
                  <InfluencerAboutTag1>{data?.AboutTag1}</InfluencerAboutTag1>
                  <InfluencerAboutTag2>{data?.AboutTag2}</InfluencerAboutTag2>
                </InfluencerTags>
              </InfluencersShortBio>

              <InfluencerViewProfileButton>
                View Profile
                <div>
                  <img
                    src="/assets/aboutContentImages/arrow.svg"
                    alt="Arrow"
                    height="100%"
                    width="auto"
                  />
                </div>
              </InfluencerViewProfileButton>
            </InfluencersCardBox>
          </InfluencersCardWrapper>
        ))}
      </div>
    </div>
  )
}

export default InfluencersCard
