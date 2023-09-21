import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2';
import { DoughnutController, ArcElement, LineController, PointElement, LineElement } from 'chart.js'
import Chart from 'chart.js/auto';
Chart.register(ArcElement);
Chart.register(DoughnutController);
Chart.register(LineController);
Chart.register(PointElement);
Chart.register(LineElement);


const ChartStats = () => {
    return (

        <div>
            <section class="bg-cover bg-center bg-no-repeat bg-[url('https://img.freepik.com/free-vector/blue-marketing-charts-design-template_52683-24522.jpg?w=2000')] bg-gray-700 bg-blend-multiply">

                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        Check our Stats
                    </h1>
                    <div class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        <div className='text-2xl font-semibold m-4'>Women Welfare NGO Statistics</div>
                        <div>
                            Number of women served: 10,000
                        </div>
                        <div>
                            Number of women empowered: 5,000
                        </div>
                        <div>
                            Number of women with access to education: 2,500
                        </div>
                        <div>
                            Number of women with access to healthcare: 1,500
                        </div>
                        Number of women with access to financial services: 1,000
                    </div>
                </div>
            </section>

            <div className='flex m-10 gap-10 items-center justify-evenly flex-wrap'>
                {/* dougnut */}
                <div>
                    <Doughnut
                        data={{
                            labels: ["PreVocational program class 6", "Multiskill foundation program class 10", "Beauty Parlour program for women", "Organic Farming", "Sewing training for Women"],
                            datasets: [{
                                label: "online tutorial subjects",
                                data: [25, 45, 13, 35, 30, 38],
                                backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'gold', 'lightblue'],
                                hoverOffset: 5
                            }],
                        }}
                        height={500}
                        width={500}
                        options={{
                            responsive: false,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Number of Benificiaries enrolled under each initiative'
                                }
                            }
                        }}
                    />
                </div>

                {/* line */}
                <div className='m-4 p-10'>
                    <Line 
                        data={{
                            labels: ["2013", "2015", "2017", "2019", "2021", "2023"],
                            datasets: [{
                                label: "online tutorial subjects",
                                data: [13, 19, 30, 42, 48, 55],
                                backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'lightblue', 'gold'],
                                borderColor: ['black'],
                                borderWidth: 2,
                                pointRadius: 5,
                            }],
                        }}
                        height={500}
                        width={500}
                        options={{
                            responsive: false,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Number of Activists enrolled year-wise'
                                }
                            }
                        }}
                    />

                </div>
            </div>
        </div>
    )
}

export default ChartStats