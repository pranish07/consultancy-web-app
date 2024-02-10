import { TestPrepExamCard } from "./TestPrepExamCard";

export const TestPrepExam = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-5">Our Office in Nepal</h1>
      <h3 className="text-2xl text-center my-5">AECC Nepal, Kathmandu</h3>
      <div className="flex gap-3">
      <TestPrepExamCard
        image="https://www.aeccglobal.com.np/images/2023/09/12/shutterstock_1038627466.webp"
        exam="IELTS"
      />
      <TestPrepExamCard
        image="https://www.aeccglobal.com.np/images/2023/09/12/shutterstock_1038627466.webp"
        exam="IELTS"
      />
      <TestPrepExamCard
        image="https://www.aeccglobal.com.np/images/2023/09/12/shutterstock_1038627466.webp"
        exam="IELTS"
      />
      </div>
    </div>
  );
};
