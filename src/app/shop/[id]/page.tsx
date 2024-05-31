import { BookDetailModule } from '@/modules';

const Page = ({ params }: { params: { id: string } }) => {
  return <BookDetailModule bookId={params.id} />;
};

export default Page;
