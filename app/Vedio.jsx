'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledSvgContainer = styled(Box)({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Vedio = () => {
  const svgRef = useRef(null);
  const BannerSvgRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Calculate scroll offset as a percentage
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const totalScroll = scrollTop / (docHeight - windowHeight); // Normalize scroll value
      setScrollOffset(totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update the primary SVG paths
  useEffect(() => {
    const svg = svgRef.current;
    if (svg) {
      const paths = svg.querySelectorAll('.half_line');
      paths.forEach((path) => {
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset =
          pathLength * (1 - scrollOffset * 3.6 + 0.95); // Update based on scroll
      });
    }
  }, [scrollOffset]);

  // Update the second SVG paths when scrolled 50%
  useEffect(() => {
    const updatePathAnimation = (svgRef, startOffset, endOffset) => {
      const svg = svgRef.current;
      if (svg) {
        const paths = svg.querySelectorAll('.animated-path');
        paths.forEach((path) => {
          const pathLength = path.getTotalLength();
          const progress = Math.min(
            Math.max(
              (scrollOffset - startOffset) / (endOffset - startOffset),
              0
            ),
            1
          ); // Normalize progress between 0 and 1
          path.style.strokeDasharray = pathLength;
          path.style.strokeDashoffset =
            pathLength - pathLength * progress * 1.2 + 50;
        });
      }
    };

    updatePathAnimation(BannerSvgRef, 0.5, 1); // Trigger animation at 50% scroll
  }, [scrollOffset]);

  return (
    <Box
      sx={{
        position: 'relative',
        height: '150vh', // Ensures the page is scrollable
        zIndex: 40,
        background: 'blue',
      }}
    >
      {/* Foreground Content */}
      <Box
        sx={{
          position: 'relative',
          width: '22em',
          height: '32em',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateY(50%)',
          color: 'white',
        }}
      >
        {/* SVG Path Animation */}
        <StyledSvgContainer>
          <svg
            ref={svgRef}
            width="500"
            height="700"
            viewBox="0 0 500 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="half_line"
              d="M250 1C350 2 495 36 500 350C505 650 400 700 250 700"
              stroke="#FF652D"
              strokeWidth="3"
            />
            <path
              className="half_line"
              d="M250 1C150 2 5 36 0 350C-5 650 100 700 250 700"
              stroke="#FF652D"
              strokeWidth="3"
            />
          </svg>
        </StyledSvgContainer>

        {/* Inner Text and Background */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '1em',
            left: '1em',
            right: '1em',
            top: '1em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#341212',
            p: 4,
          }}
        >
          {/* White Model SVG */}
          <StyledSvgContainer>
            <svg
              width="450"
              height="650"
              viewBox="0 0 450 650"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M450 325C450 525 375 650 225 650C75 650 0 525 0 325C0 125 75 0 225 0C375 0 450 125 450 325Z"
                fill="#FEFCF7"
                fillOpacity="0.9"
              />
            </svg>
          </StyledSvgContainer>
          <Box sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
            <Typography
              variant="h5"
              component="h5"
              fontWeight="bold"
              color="#341212"
            >
              Lorem ipsum
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 2 }}
              color="#341212"
              zIndex={30}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum
              similique dignissimos mollitia repudiandae atque quae porro in
              assumenda quam.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Second SVG */}
      <Box
        sx={{
          position: 'absolute',
          top: '61%',
          left: '47%',
        }}
        ref={BannerSvgRef}
      >
        {/* <svg
          width="119"
          height="660"
          viewBox="0 0 119 715"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            className="animated-path"
            d="M48.0001 0.999998C48.0001 0.999998 11.5003 53.5 25.5003 132C39.5003 210.5 86.5022 217 115.501 317C144.5 417 -97.9997 496.5 49 714"
            stroke="url(#g1)"
            strokeWidth="2"
          ></path>
          <defs>
            <linearGradient
              id="g1"
              x1="59.3098"
              y1="0.999997"
              x2="59.3098"
              y2="714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFCF7"></stop>
              <stop offset="1" stopColor="#FF652D"></stop>
            </linearGradient>
          </defs>
        </svg> */}

        <svg
          width="532"
          height="1018"
          viewBox="0 0 532 1018"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            className="animated-path"
            d="M27.9999 1C153 295 -130.194 407.564 85.9999 464C210.5 496.5 287.5 612 251 881.5C214.5 1151 347.791 937.098 360.5 918.5C422 828.5 472.5 737.5 531 868"
            stroke="url(#g2)"
            strokeWidth="1.5"
            // style="stroke-dashoffset: 0; stroke-dasharray: none;"
          ></path>
          <defs
          // style="stroke-dashoffset: 0.001; stroke-dasharray: none;"
          >
            <linearGradient
              id="g2"
              x1="266.372"
              y1="1"
              x2="266.372"
              y2="1016.56"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF652D"></stop>
              <stop offset="1" stopColor="#FEFCF7"></stop>
            </linearGradient>
          </defs>
        </svg>
      </Box>
    </Box>
  );
};

export default Vedio;
