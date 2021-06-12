import { Back, Book, Headphones, Share } from '../../components/icons';

import { Shape1, Shape2, Shape3, Shape4, Shape5 } from './shapes';

import { Container, Header, BackButton, Cover, Content, Description, Actions } from './styles';

const Detail = () => {
  return (
    <Container>
      <Content>
        <Header>
          <BackButton to="/">
            <Back />
          </BackButton>

          <Shape1 style={{ position: 'absolute', left: '47px', top: '125px' }} />
          <Shape2 style={{ position: 'absolute', left: '74px', top: '115px' }} />
          <Shape3 style={{ position: 'absolute', left: '249px', top: '86px' }} />
          <Shape4 style={{ position: 'absolute', left: '223px', top: '218px' }} />
          <Shape5 style={{ position: 'absolute', left: '298px', top: '0px' }} />

          <Cover>
            <img
              src="https://s3-alpha-sig.figma.com/img/e046/fd18/cf5c642df64ba42c75836600719ab682?Expires=1624233600&Signature=L6aTmyi8XN83M9Uw-zWr5Q8Xyjp~0NHHRjK0yM603iG-cTJlFMSjZz~54kg~DBf5Al9o7~24ulRvBOWPF2gtUEx9Im1xYIzEu3XCdWX0IdgFXtZ5TA0Tg-kt11TybMG08xebXLovrhn0XSn6GUMlam9mRXdy~lvf2KC3YKH5ebI8xslu4mNrc5wH6GIuO79umuAWxnZQBlTW0k4QYEzycGyd0cYP47Zwia-eORZRI0Th20JKk2PXgNmPbS151mfpuQfIoHqtL0me7VBCHAvazeJQAtUmwS5BYo-TRofUe3Sl8P33r0P~aFKG9xcARgPbeQB6-2J6KP63xKNzUUr6ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="HOOKED"
            />
          </Cover>
        </Header>

        <Description>
          <h1>Hooked: How to Build Habit-Forming Products</h1>
          <span>Nir Eyal</span>
          <p>
            How do successful companies create products people can’t put down? <br /> <br />
            Why do some products capture widespread attention while others flop? <br /> <br />
            Why do some products capture widespread attention while others flop? <br /> <br />
            Why do some products capture widespread attention while others flop? Why do some products capture widespread
            attention while others flop? <br /> <br />
            Why do some products capture widespread attention while others flop? <br /> <br />
          </p>
        </Description>
      </Content>
      <Actions>
        <button type="button">
          <Book />
          <strong>Read</strong>
        </button>
        <button type="button">
          <Headphones />
          <strong>Listen</strong>
        </button>
        <button type="button">
          <Share />
          <strong>Share</strong>
        </button>
      </Actions>
    </Container>
  );
};

export default Detail;
