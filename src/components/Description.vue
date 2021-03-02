<template>


    <div class="description">
        <figure class="story_one">
        <img :src="storypic1" alt="">
    </figure>
            <p>
                <strong>
                    The five federal executions that are scheduled in this lame duck period of the Trump administration breaks with precedent from the past 130 years. Could you contextualize what’s happening right now and why they’ve made this move?
                </strong>
            </p>
            <p>It's interesting in one way because, as states are shutting down the death penalty dramatically, we have this aberration which highlights something that's been broken in the way it was set up by the Supreme Court from the beginning.
                Because, in the Gregg decision, when the Supreme Court set up the death penalty, it set up the criteria that it was not for ordinary murders, but only the worst of the worst. And nobody really knows what that means. What
                would you call an ordinary murder? And then this leaves the discretion to prosecutors to be able to go after death or not. If they don't go for death, people don't die. So, it just highlights that in the federal jurisdiction
                for 17 years, no one was killed.</p>
            <p>It's like Trump is trying to execute as fast as possible before Biden gets in. Lisa Montgomery [one of the five scheduled federal executions]–who was tortured and abused as a child, disconnected from reality because of what
                happened to her–did a terrible crime, but she is scheduled to be killed eight days before Biden takes office. And if you want to see a capricious, arbitrary application of death in the hands of very flawed human beings,
                here it is.</p>
            <p>What you mentioned about prosecutorial discretion and flawed judgement seems to apply in the case of Brandon Bernard. The prosecutor in his trial has spoken out about not wanting him to be put to death.</p>
            <p>
                <strong>
                    What you mentioned about prosecutorial discretion and flawed judgement seems to apply in the case of Brandon Bernard. The prosecutor in his trial has spoken out about not wanting him to be put to death.
                </strong>
            </p>
            <figure class="story_two">
                <img :src="storypic2" alt="">
            </figure>
            <p>Nearly half an hour past 9 p.m. on Thursday night, the state executed Brandon Bernard by lethal injection. His death comes in spite of a high-profile and bipartisan campaign to spare his life, including the support of the prosecutor
                and five of the sentencing jurors from his case. He was the ninth person to be executed since July after a 17-year hiatus and the first to be federally executed during a lame duck presidency in 130 years. By the time of
                his death, Bernard, 40, had spent more than half his life behind bars.</p>
            <p>
                <strong>
                    A lot of critics of the death penalty have been pointing out the racial, economic, and social inequities that we see so often see on death row. Could you speak to this?
                </strong>
            </p>
            <p>Sister Helen Prejean, a Catholic nun and one of the most well-known anti-death penalty advocates, spoke to Bernard and his legal team moments before the execution was carried out. "I have never met anyone quite like Brandon,
                who was so poised about living or dying," she tells BAZAAR.com. "I think he had just reached a point spiritually in his life that he had accepted responsibility and was truly sorry for what he had done."</p>
            <p>In 1999, Bernard, then 18 years old, was convicted in the Texas killing of Stacie and Todd Bagley. He was one of five young men involved in the double murder-robbery and, as a low-ranked member of the gang, was tasked to get
                rid of the murder evidence by burning the car with the bodies. Christopher Vialva, who was executed in September, shot and killed the Bagleys.t</p>


    </div>
</template>
<script>
export default {
    name:'Description',
        data(){
       return {
                  storypic1: `/images/storypic1.png`,
                  storypic2: `/images/storypic2.png`,
                 
              }
  }
}
</script>
<style scoped>
.story_one {
    margin: 0 0 20px;
}
.description p {
    font-size: 20px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    line-height: 28px;
    margin: 0 0 25px;
}
.description  p strong {
    font-weight: 700;
    line-height: 32px;
    font-size: 22px;
}
.story_two {
    margin: 0 0 10px;
    text-align: center;
}
</style>