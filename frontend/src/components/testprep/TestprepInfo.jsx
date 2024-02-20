import { TestPrepInfoForm } from "./TestPrepInfoForm";

export const TestprepInfo = () => {
  return (
    <div className="flex gap-6">
      <div className="w-[45%]">
        <h1 className="text-2xl my-6">
          English Proficiency Courses for International Students
        </h1>
        <p>
          Most institutions in the world use standardised English tests to
          ensure that international students have the necessary English
          communication and comprehension skills to do well in their course of
          choice. At AECC Nepal, we understand how each of the
          industry-recognised English tests is conducted and what&apos;s
          required of applicants. As a result, we offer the best IELTS class in
          Kathmandu, Pokhara, and Chitwan and our other English proficiency
          courses such as SAT, PTE and TOEFL are designed to help students
          achieve their desired score
        </p>
        <div className="flex justify-center my-9">
        <button className="p-3 rounded-3xl bg-blue-900 text-white ">
          Download free English Test Prep Guide
        </button>
        </div>
      </div>
      <TestPrepInfoForm />
    </div>
  );
};
