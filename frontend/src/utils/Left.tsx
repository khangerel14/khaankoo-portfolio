const data = [
    {
        name: 'HTML5',
        url: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png'
    },
    {
        name: 'CSS',
        url: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png'
    },
    {
        name: 'Javascript',
        url: 'data:image/webp;base64,UklGRvYEAABXRUJQVlA4IOoEAADQHgCdASqwALAAPt1uslGopqUipRNpgRAbiU3cLmgZTBNag8T5ytW/wfByvv9Bfib/pn1lPMr+w3rMelj/SeoB/cuos9ADpWf3P9J3VO/KtlzGBWm3ZKagqB7XHvo8ladFFq9JXrMzMzN400ATu7u7u7u7u9Ry3nxOhp4+AWbhb48COjFHQRrk+XvJBoiY94AuMCnc6AvJXRKBtGzxsWgkJiXzXCDAWbU00Sh2Qb4m1Mr7+G+6/hf+sJeTw8bh7Y57KGWW4MAHly4MLjzQRPZcojr92hA0+RNhuAcGK0pff9hW+B9QC+eQt18kI2Lx0BehUjpOgqf5OsYNLhDcUigA/v3E/P/n5n+B/ulevtzPYxGz7iTVuJNW4kvHK2ik3AJvguasAdQbMhpmi+3+Jmgo7aXt6LS4U+g54HHt6UdbBvYpHRviB4b1s600fc32nXXzUGdEoUuHiKIWmEPtyeoBjebqatSuRDpP3NC+1umYglHx3OxJ1VlR1xuXc89huRFlkOg1ho2J9BHCCcTud9KsRn8QKwPvroN3x4QVmLQCLxOrohXLYkTMLAtzmBbuKe5y7cM1ZWYaD6V1jrJu80KiZyBoqjUbO+TpnNm1tYIEVvM1G04HGnIXfsAqNoXT2XrR5txcma3XrxHfzAIJE+Ccu8EqWPEHP30cU7Wtz1abopP+svatLWIS/yUYEtxMYVIuaTSdwZc9Dx7YOmFVgtoXJZp0N0kqZw0WLUtScNrKQsqZWzWHqaxSa108pfzDrpxT3p1ZQil8+FDDjzG/qN7zpJdxI1lz77Ja8QK/785bm2OOmLM/isboYvDX2CL7TBZeB3HpIxiP8QL/TO2jDo1rPoQCt/ri6uOnsZj6+AYxEMrpvJ4ONF+ikBAP5Zq1k1YuGRtEt98RtElkVmREbwQBl+6OZovxuAoyfl0YXaKQAxRPB37ZK4nGiTsbAzBnCJzwsrE2oIU7SFU4L0aQUtT5a8GqsxTzYVvlRZbyjSx/3B2FLgThepC1i6xF2xHKCl8cqAfCOWXjKmCIiyoWEsHZ9GMAaw2mZIhN7jeMPt/UMjCg6DY/tmesRRcPwXdU8CiJyPcF4phJY6qwKCuvuU91g2QCwyR31cjRkrQjL7S/zxMYYQyTHdf+EU/Cy5qT8JnCGziU74qNrGt0DB7iukJjMMK548jyXAMUjsEmwb6BtUPn3tfYsDf5CDe8h2CtPRzp+31hRIZ6Jm+gWxXd0GvOYQnbs4nGTR6QSXhYBlE5korTQ2cfx1BQn0bQ1kCYzEJrdgIhPBcZ6V0SRM3foYd5Qf++72/l0S/1EJng8N5TIq+Vsjdf1H4yrBrzHVTRFKd4QvLYF/ZJ+AtaWU030nFE5G2i1E+5THBiEnMPpzaerpNFujh2HcnO/rEH7WvtT3HepxPA2nh8hINaNSLfsUt0aEv9deKAka2NdmLKZsPwp4Mff6b0441UfuJPRuupdntzqq8VFrhmDyt/d3n+kYRRlp7fn6r/vJENIUWb/jMC6u18HZtg+aQfgWQJzLYNiZilhWYqHo1tsHMKrlqkjF4WPqV31lwi0Mw8Ns7Cv8pFH+uVZEPXXh+dhAC9jMofG2LJZX00jcZ6stmCl6PXyTwwDMlmmbqvBwCyeRARSWk6fcLSPmSx3v1DzchXaJljH1TICdIAAAAAAAAA'
    },
    {
        name: 'React.js',
        url: 'data:image/webp;base64,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'
    },
    {
        name: 'Tailwind CSS',
        url: 'data:image/webp;base64,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'
    },
    {
        name: 'Node.js',
        url: 'data:image/webp;base64,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'
    },
    {
        name: 'Typescript',
        url: 'data:image/webp;base64,UklGRiAEAABXRUJQVlA4WAoAAAAQAAAArwAArwAAQUxQSGUAAAABHyAQIPxXUWYjIoKNJCBJkRURoRVFktQQXghAyjkhZ6mYwNQYIKL/EwAUiL//KCJSUSRJzQEvBCDlnJCzVExgahRE9D/UiFhRN4LtIblBkkDymfTi9/8LhfyRDJPUS/pHOpmcCgBWUDgglAMAANAaAJ0BKrAAsAA+3WqvT6impKIrtLihEBuJTdwtzhsQgNh89bgfnFNtDzvGnSU7zyssdldsBdKaz2T2wuMmFxkwuMmFxkwzBWrNq1ZtWrNq1ZlyeCs7Oijhbjr9//uKInwvDZVOA+CNxEZZfwWFAG8BGpkLQgXRf6eyRMpexUi3e0poJ+beho6qaTWHhbqIuXqH9YER42kuqb8IFo55NJesPzXoopilExnDoyhz7t8/OWaFxyXbIitV11WRFTPpbWEmIS1+iuY21swH2F5eJ66TX7K5uEI0xeo3LliuAAAA/vcWf1WPBbNVXx+X0MGfP8M+T27Gc+JzQl1+tWW92sZgAHqCEGPDIB0/RWYhRKw2SfzvBu1/QwUAjaDcLsLhiRE8zlZ3TscDD58BjI+e80kddJAA4h34DQFRYSsDH1OFIXdsXDHq2zTar6YTG/RpJy4eeKU5prgQHsHTDVxTTfmD9rlNRBJrfgK4hhQOZnCTnnZNlFmRzP+7ttr3GVwFAgDSKkFvyq/GfUsPY4uMfz01f6LM+HpX1+bzcdYAEIk0FRTxPKuaB7RQnGRIsv85gaCfUoNmyYfDtphaBSIUxonsmrPmvgq9VexYZ/M08kEFKlr9DSx47N2mwct9j8/zXYCZLB23LC/ULx7EChqGXNw8qKz4HLWjKhk4oo6kqL/gzEdfz89tZHagPlN3Lie6s2AYlgSDgY54jjvIqt7oUisgMJjpJxOd5QsmBEABPxKQ7l/RUTrRlramAxfv94RqsBFwDosSgOFVcf5p/hP9L0XOXGF31RkHryiCmnbJ7GZlARlZYJhqLM/Rb92sJciv/7hcSAABPCnzv6qEv5XdyPMc/xXLcVcoYQGYmkO6H7y5RM1ymYh29G7o53+kBl004RDQn7Zqs9EDIUFsatLZbU5y5oWxbMUK6W93w2xGNNy0KiSiiTz062gEQragzJf+4jboDUIi54qs/T2G1rWM8VQ1NrRjHVdLljWHkeQ/lF3vfQZZ/GYIi2oFtqR5J0BGemqT5YUu0T+fgYp5+RRCMpb+LmiZesX6pp5hdfSDiOSssMi6dkDy2HOmP/IuhpdbnUfN1Lulc8sfxAn4/vy8at5mqeRLUPOCWhoHGY2A3ETNzgFk74uA5Xt1vSPu/IukYzal2qQF53IqCgm05ag5tAllAV8Ms+csJACOXeIVWMgPQRXtQhcH2Bkwz3zyt5PmTNmYAAA='
    },
    {
        name: 'Express.js',
        url: 'data:image/webp;base64,UklGRvIEAABXRUJQVlA4WAoAAAAQAAAArwAArwAAQUxQSGsEAAABJyAQSOFmFxERg+xIkiSp2oUnwCkADE+AUwCO0V+nmcrOjOqefyL671CSlbDBdBIStI8Hj4+4fSKznv/utbaHqz197OP6damH992vH8C2bbtHQ9i+R/s6vHUvoz0VmEgfw34Hv/YlyJqPb/u+/88/sn4m+y1YevcC9hg5yEuwRbhya90FF0BS5B1/WBXczkvBJ7ySY+cuPIZWGJ5cD5V+qkjJzVBifSTd8E77I6YoVeoF537K2f4ZhRIuvaUySXDTD30wwIyXwgmQxW1GeyBWJIE+3RJGgWiy5YPkx2oF9HIj0mlFN7q2TbdQ1/I9b/EdSRUk34j2vEnP4tZCbV/ZN3xfvBo23YlApDMlWiTWHAlfAh+CBAP0+NBI8CwW3UQ6mFAPGI0wUPWA3EknN51PG/VraujKl0gHRnsgMBq0EwhmfgACfVB3Ih0kmpA02h2hFjICPvlSa4+NaBx0grQHkQ4QTUgQiIB0bkFDzdFU16uO2+aHojL2ZtECpkHoMnyqJ2HQH8BvfVBoKvLIiuQchp4Ex3oEDrhqApdaI9AfjrZiJSWske1AtdAOwkzq9ymREbxNOqRg/NJeMqxGRCYLHkSDGqp2TjCn2dgiA2c1gmIryM7+xjQLLDmOstxi5/SYZtA1oolI6VmAk7FKYGSYURetcxYYBtAdRZOTXWeGn+FvcodVB80yNFaqeINosjXk2FWt6z8TnWQ+29DQ+7EX1WuNtWetU3lkkk01CkeOIJN3renpNdiQzVqaNgw+BxBq0cVWf1GDYr0x3CXo5YY+NOwKr89BvNyocBqjZZu17jgSTjbJctaivrpLjUWLaESQ17JhMn/U5pXGomvXsamUziAt9OW04yRp0jyXJhqaonLmyUmNEDZHF/lDHuN/5MG70p5EMeafrmPaJ0p2SWedEclVOfV/g3QUSql/vtkkhtRKOqk4NV7nm5Lu5KLSuYSZJjGcgTLW2F4kGlvLQTrApvSyUVzIIA1UMECmFPHMOonGasVIZ94AcXDH6idi8ugLwLBwSFcR0YAyeyBUOFy1sfGsWyl7ZPwoQCYRDUDiqeUbQfEJK03m9imBwgqpYkhRKu07CAcCLknXkc70OPCHXHskmuQKGMtlfWhHKnykakCeTRp8IEirikQ02ZViW3ToQ2qFMZJNTU9Mlck2b2Xd/FIVyqJhdBYe26zQ9fgr/0Yn2wSEvzgDW77UqyGanGhUQcsvujPNtK+K8dxAnd2SPaQVSofw5kCCrsvZ40oV45Y3cMt0e9pA8jlXS0V95vfanccE5zQHZ5CZQ0sFirbaLlSWN8Fxh4zmaFUvd3MwfvVnl7tlOPQsmSGSroWpF/kJLVQ0rXJZHOz6uw93MBPabiKuKHiwUD4Uy4/bBOn6hIvIgFTXy/CwyZOyDUbNBDdNyzGDbTh76E4qmqZ0PHMHMXkNk4OIZoYbLvprRiNJDOD8R/JL3Ha+dwfXs7XCfgewXm6ntV/93fctY/Hnf79dax2n6IHHrk951g0AVlA4IGAAAACwCQCdASqwALAAPt1utFSopiUjIEgBEBuJaW7hdgEbQBPa9FXCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUfgAD+/0T0AAAAAAA='
    }
]

const Left = () => {
  return (
    <div className="flex gap-14 justify-between items-center flex-wrap">
        { data.map((e, index) => {
            return(
                <div className="flex flex-col items-center gap-2" key={index}>
                    <h1 className="text-xl font-semibold">{e.name}</h1>
                    <img src={e.url} alt="" style={{ height: 48 }}/>
                </div>
            )
        })}
    </div>
  )
}

export default Left