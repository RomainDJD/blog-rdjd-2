import {Column,CreateDateColumn,Entity,PrimaryGeneratedColumn,UpdateDateColumn,ManyToOne,JoinColumn}
from 'typeorm';
import { User } from 'src/user/entity/user.entity';


  
  @Entity()
  export class Article {
  
    @CreateDateColumn()
    created: Date;
  
    @Column({ type: 'varchar', name: 'titre', length: 200 })
    titre: string;
  
    @Column({ type: 'varchar', name: 'article_content', length: 100 })
    articleContent: string;
    
    @UpdateDateColumn()
    updated: Date;

    @PrimaryGeneratedColumn('uuid', { name: 'article_id' })
    articleId: string;

    @ManyToOne(type => User)
    @JoinColumn()
    user_Id: string;

   //  @ManyToOne(type => Category)
 //@JoinColumn() this decorator is optional for @ManyToOne, but required for @OneToOne
 //category: Category;
  }
  