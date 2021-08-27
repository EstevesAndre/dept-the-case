import { MainLayout } from '@/components/Layout/MainLayout'
import { RightSideBar } from '@/features/popular'
import { TopRatedMovies } from '@/features/popular'
import { SearchBar } from '@/features/search'

export const Landing = ({ title, current = "Search a movie" }) => {
  return (
    <MainLayout>
      <div className="flex-grow max-w-7xl flex flex-col items-center lg:overflow-y-scroll lg:border-l-2 lg:border-r-2 lg:border-gray-800">
        <div className="flex-0 flex sm:flex-row flex-col items-center py-5 sm:py-10">
          <p className="text-4xl font-mono font-semibold text-gray-100 text-center sm:inline-block hidden sm:mr-5">{title}</p>
          <p className="text-4xl font-mono font-normal text-gray-200 text-center sm:inline-block mt-3 sm:mt-0">{current}</p>
        </div>
        <SearchBar className="flex-grow w-full " />
        <TopRatedMovies styles="pb-5 pt-10" />
      </div>
      <RightSideBar />
    </MainLayout>
  )
}