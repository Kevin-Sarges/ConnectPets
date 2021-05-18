import React from 'react';
import ContentLoader from 'react-content-loader';

import { Container } from './styles.js';

const PreLoader = (props) => (
  <Container>
    <ContentLoader 
      speed={2}
      width={164}
      height={169}
      viewBox="0 0 164 169"
      backgroundColor="#bdbdbd"
      foregroundColor="#ecebeb"
      {...props}
    >
      <path d="M 47.9 4.72 c 2.389 1.983 4.872 6.032 5.4 9.694 c 0.518 3.574 -3.339 6.001 -4.955 8.743 c -1.656 2.814 -2.271 8.588 -5.363 9.189 c -3.013 0.587 -5.65 -3.786 -7.974 -5.714 c -2.389 -1.979 -6.63 -3.595 -7.152 -7.262 c -0.51 -3.57 0.609 -8.626 2.225 -11.371 c 1.656 -2.81 5.355 -6.093 8.44 -6.694 c 3.013 -0.582 7.056 1.49 9.38 3.414 z M 30.08 34.888 c 0.53 3.663 -0.62 6.708 -2.327 9.486 c -1.656 2.702 -3.257 7.742 -6.27 8.323 c -3.086 0.601 -7.515 -1.253 -9.87 -3.281 c -2.291 -1.99 -2.411 -6.79 -2.927 -10.363 c -0.517 -3.663 -0.85 -7.667 0.852 -10.438 c 1.662 -2.709 4.632 -5.255 7.646 -5.844 c 3.092 -0.593 5.67 2.454 8.032 4.488 c 2.285 1.978 4.354 4.055 4.864 7.629 z m 13.784 3.74 c 4.814 -0.844 11.1 0.696 18.32 8.758 c 9.476 10.56 10.974 19.036 7.84 24.198 c -6.726 11.064 -13.971 10.453 -20.083 11.644 c -6.288 1.22 -16.183 1.703 -21.028 -4.36 c -3.433 -4.297 -4.06 -11.825 0.42 -24.623 c 3.953 -11.29 4.656 -13.885 14.53 -15.618 z m 85.297 46.398 c 3.007 0.67 6.208 4.26 7.837 7 c 1.68 2.834 2.856 7.638 2.291 11.286 c -0.545 3.557 -4.87 4.27 -7.186 6.187 c -2.368 1.962 -4.622 7.127 -7.708 6.434 c -3 -0.66 -4.22 -5.831 -5.855 -8.583 c -1.674 -2.822 -5.203 -6.052 -4.645 -9.7 c 0.546 -3.563 3.069 -7.847 5.385 -9.767 c 2.369 -1.968 6.795 -3.55 9.881 -2.857 z m -20.034 18.941 c 1.589 2.79 2.939 5.569 2.392 9.128 c -0.565 3.648 -2.531 6.037 -4.932 7.952 c -2.349 1.862 -5.301 5.93 -8.309 5.264 c -3.085 -0.688 -6.73 -4.218 -8.352 -7.082 c -1.583 -2.778 -0.31 -7.339 0.243 -10.898 c 0.552 -3.648 1.405 -7.534 3.812 -9.442 c 2.342 -1.863 5.88 -3.048 8.887 -2.376 c 3.086 0.688 4.631 4.593 6.259 7.454 z m 14.287 18.213 c 4.79 1.164 10.257 5.163 14.728 15.641 c 5.876 13.744 4.507 21.846 0.395 25.868 c -5.434 5.309 -16.168 4.142 -22.274 2.779 c -6.275 -1.398 -15.733 -4.96 -18.55 -12.615 c -1.98 -5.409 -0.407 -12.729 7.515 -22.916 c 6.965 -8.986 8.396 -11.135 18.186 -8.758 v 0.001 z m 15.713 6.132 c -1.68 -2.827 -2.799 -5.904 -2.234 -9.551 c 0.545 -3.551 2.635 -5.572 4.951 -7.498 c 2.368 -1.962 4.977 -4.944 8.062 -4.256 c 3 0.675 5.953 3.311 7.588 6.059 c 1.674 2.826 1.309 6.813 0.751 10.459 c -0.552 3.552 -0.719 8.355 -3.022 10.28 c -2.382 1.97 -6.828 3.691 -9.907 3.002 c -3.007 -0.665 -4.56 -5.748 -6.189 -8.496 v 0.001 z M 55.506 29.941 c -0.51 -3.574 0.865 -6.319 2.482 -9.06 c 1.656 -2.813 3.238 -6.675 6.33 -7.276 c 3.013 -0.586 6.54 0.699 8.863 2.627 c 2.388 1.983 3.197 5.878 3.72 9.549 c 0.516 3.571 1.745 8.162 0.129 10.903 c -1.65 2.818 -5.323 6.244 -8.414 6.844 c -3.013 0.583 -5.925 -3.569 -8.255 -5.497 c -2.383 -1.983 -4.325 -4.427 -4.855 -8.09 z" />
    </ContentLoader>
  </Container>
)

export default PreLoader;