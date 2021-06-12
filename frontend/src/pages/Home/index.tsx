import Navbar from '../../components/Navbar';

import { Search } from '../../components/icons';

import { Container, SearchWrapper, Grid, Card } from './styles';

const Home = () => {
  return (
    <>
      <Container>
        <SearchWrapper>
          <Search />
          <input placeholder="Search book" />
        </SearchWrapper>

        <h1>
          Hi, <strong>Mehmed Al Fatih</strong> 👋
        </h1>

        <Grid>
          <Card>
            <img
              src="https://s3-alpha-sig.figma.com/img/af2f/2a89/3eba532f27b371d3ffc493617b50021a?Expires=1624233600&Signature=PCznJLcI3sb3~bGyl54cogyKJ~qh0KH1xIaZ0QLP8Ot2mghIb9CjgT~wOb8domezBlNIlj~IdcHl~MGwraG6VC8hsbOp9KCeWiHmcXYsXsEXMIa-L2WnSy9ctLdbrcQi~FMEn2kwLqjs3NvxwHL2FCdxBfDvIZ7~8fYarsGxmi1bLpG6~ll64vQW4VhroaICyc4Htnok5TZ-0waQcg0D4Bg-JzcF3ssNvAmOQIIv0ZgeaEjwySMbw4qB5wMArM8xa7yRRKw-4CLa3ujNbkBZ2~Iy03tAdkvEsAYdfQUtFVfL~rqWePylGRo1Xax5dGASbzlR1DvdzwOCy7VXV8FK0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="The One Thing"
            />
            <p>The One Thing</p>
            <span>by Gary Keller</span>
          </Card>

          <Card>
            <img
              src="https://s3-alpha-sig.figma.com/img/e046/fd18/cf5c642df64ba42c75836600719ab682?Expires=1624233600&Signature=L6aTmyi8XN83M9Uw-zWr5Q8Xyjp~0NHHRjK0yM603iG-cTJlFMSjZz~54kg~DBf5Al9o7~24ulRvBOWPF2gtUEx9Im1xYIzEu3XCdWX0IdgFXtZ5TA0Tg-kt11TybMG08xebXLovrhn0XSn6GUMlam9mRXdy~lvf2KC3YKH5ebI8xslu4mNrc5wH6GIuO79umuAWxnZQBlTW0k4QYEzycGyd0cYP47Zwia-eORZRI0Th20JKk2PXgNmPbS151mfpuQfIoHqtL0me7VBCHAvazeJQAtUmwS5BYo-TRofUe3Sl8P33r0P~aFKG9xcARgPbeQB6-2J6KP63xKNzUUr6ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="HOOKED"
            />
            <p>HOOKED</p>
            <span>by Nir Eyal</span>
          </Card>

          <Card>
            <img
              src="https://s3-alpha-sig.figma.com/img/d29a/e0c9/a641c750f740cea3cd6d34c134270854?Expires=1624233600&Signature=Ovgwmbm2fUiNTAL2eN-zukFeiD4IMglxha5W1ylkOd8qGVr~rPgJrH5lgbh~japwhjEVl0vSkfIhbHRHTxW2AWL3CHab667pMgvDdKH~CuM3WurJIFi8u0uy30wmtVjR8CRF1ARsM~MXVdxkCUFh4DFS7J0Fu66KKmAv1Hx1LObNG8bHlhxO7dYf8tQDQjHjn1ZZweVwNmdCEBjP1prRIBkFRSYIk6D6B6xcq1fSjmXWHWVQCfEZOCzmJ8ZZ-oLs7xljxFJsaaU9oRRU0l4e0WD~7UIVPP1I33mFuP84rk~7EW74YoS9mEWI-0jpMBN1iP2uLAYgMW~j9bktaQqJHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="Good to Great"
            />
            <p>Good to Great</p>
            <span>by Jim Collins</span>
          </Card>

          <Card>
            <img
              src="https://s3-alpha-sig.figma.com/img/af2f/2a89/3eba532f27b371d3ffc493617b50021a?Expires=1624233600&Signature=PCznJLcI3sb3~bGyl54cogyKJ~qh0KH1xIaZ0QLP8Ot2mghIb9CjgT~wOb8domezBlNIlj~IdcHl~MGwraG6VC8hsbOp9KCeWiHmcXYsXsEXMIa-L2WnSy9ctLdbrcQi~FMEn2kwLqjs3NvxwHL2FCdxBfDvIZ7~8fYarsGxmi1bLpG6~ll64vQW4VhroaICyc4Htnok5TZ-0waQcg0D4Bg-JzcF3ssNvAmOQIIv0ZgeaEjwySMbw4qB5wMArM8xa7yRRKw-4CLa3ujNbkBZ2~Iy03tAdkvEsAYdfQUtFVfL~rqWePylGRo1Xax5dGASbzlR1DvdzwOCy7VXV8FK0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="The One Thing"
            />
            <p>The One Thing</p>
            <span>by Gary Keller</span>
          </Card>

          <Card>
            <img
              src="https://s3-alpha-sig.figma.com/img/e046/fd18/cf5c642df64ba42c75836600719ab682?Expires=1624233600&Signature=L6aTmyi8XN83M9Uw-zWr5Q8Xyjp~0NHHRjK0yM603iG-cTJlFMSjZz~54kg~DBf5Al9o7~24ulRvBOWPF2gtUEx9Im1xYIzEu3XCdWX0IdgFXtZ5TA0Tg-kt11TybMG08xebXLovrhn0XSn6GUMlam9mRXdy~lvf2KC3YKH5ebI8xslu4mNrc5wH6GIuO79umuAWxnZQBlTW0k4QYEzycGyd0cYP47Zwia-eORZRI0Th20JKk2PXgNmPbS151mfpuQfIoHqtL0me7VBCHAvazeJQAtUmwS5BYo-TRofUe3Sl8P33r0P~aFKG9xcARgPbeQB6-2J6KP63xKNzUUr6ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="HOOKED"
            />
            <p>HOOKED</p>
            <span>by Nir Eyal</span>
          </Card>

          <Card>
            <img
              src="https://s3-alpha-sig.figma.com/img/d29a/e0c9/a641c750f740cea3cd6d34c134270854?Expires=1624233600&Signature=Ovgwmbm2fUiNTAL2eN-zukFeiD4IMglxha5W1ylkOd8qGVr~rPgJrH5lgbh~japwhjEVl0vSkfIhbHRHTxW2AWL3CHab667pMgvDdKH~CuM3WurJIFi8u0uy30wmtVjR8CRF1ARsM~MXVdxkCUFh4DFS7J0Fu66KKmAv1Hx1LObNG8bHlhxO7dYf8tQDQjHjn1ZZweVwNmdCEBjP1prRIBkFRSYIk6D6B6xcq1fSjmXWHWVQCfEZOCzmJ8ZZ-oLs7xljxFJsaaU9oRRU0l4e0WD~7UIVPP1I33mFuP84rk~7EW74YoS9mEWI-0jpMBN1iP2uLAYgMW~j9bktaQqJHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="Good to Great"
            />
            <p>Good to Great</p>
            <span>by Jim Collins</span>
          </Card>

          <Card>
            <img
              src="https://s3-alpha-sig.figma.com/img/af2f/2a89/3eba532f27b371d3ffc493617b50021a?Expires=1624233600&Signature=PCznJLcI3sb3~bGyl54cogyKJ~qh0KH1xIaZ0QLP8Ot2mghIb9CjgT~wOb8domezBlNIlj~IdcHl~MGwraG6VC8hsbOp9KCeWiHmcXYsXsEXMIa-L2WnSy9ctLdbrcQi~FMEn2kwLqjs3NvxwHL2FCdxBfDvIZ7~8fYarsGxmi1bLpG6~ll64vQW4VhroaICyc4Htnok5TZ-0waQcg0D4Bg-JzcF3ssNvAmOQIIv0ZgeaEjwySMbw4qB5wMArM8xa7yRRKw-4CLa3ujNbkBZ2~Iy03tAdkvEsAYdfQUtFVfL~rqWePylGRo1Xax5dGASbzlR1DvdzwOCy7VXV8FK0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="The One Thing"
            />
            <p>The One Thing</p>
            <span>by Gary Keller</span>
          </Card>

          <Card>
            <img
              src="https://s3-alpha-sig.figma.com/img/e046/fd18/cf5c642df64ba42c75836600719ab682?Expires=1624233600&Signature=L6aTmyi8XN83M9Uw-zWr5Q8Xyjp~0NHHRjK0yM603iG-cTJlFMSjZz~54kg~DBf5Al9o7~24ulRvBOWPF2gtUEx9Im1xYIzEu3XCdWX0IdgFXtZ5TA0Tg-kt11TybMG08xebXLovrhn0XSn6GUMlam9mRXdy~lvf2KC3YKH5ebI8xslu4mNrc5wH6GIuO79umuAWxnZQBlTW0k4QYEzycGyd0cYP47Zwia-eORZRI0Th20JKk2PXgNmPbS151mfpuQfIoHqtL0me7VBCHAvazeJQAtUmwS5BYo-TRofUe3Sl8P33r0P~aFKG9xcARgPbeQB6-2J6KP63xKNzUUr6ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="HOOKED"
            />
            <p>HOOKED</p>
            <span>by Nir Eyal</span>
          </Card>
        </Grid>
      </Container>
      <Navbar />
    </>
  );
};

export default Home;
